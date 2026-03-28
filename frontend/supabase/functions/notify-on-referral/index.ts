import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  const { record, table } = await req.json()

  const isReferral = table === 'referrals'
  const subject = isReferral 
    ? `🚨 FULL REFERRAL: ${record.participant_name || 'New Participant'}`
    : `📩 FULL ENQUIRY: ${record.name || 'New Lead'}`

  // Logic: Map every key/value in the database row to a clean HTML row
  const tableRows = Object.entries(record)
    .map(([key, value]) => {
      // Clean up the labels (e.g., "participant_name" becomes "Participant Name")
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      return `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0f172a; width: 40%;">${label}</td>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155;">${value || '<span style="color: #cbd5e1;">Not Provided</span>'}</td>
        </tr>
      `
    })
    .join('')

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-top: 4px solid #d97706; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #0f172a; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Kaya Care Co. System Notification</h1>
      </div>
      <div style="padding: 30px;">
        <h2 style="color: #0f172a; margin-top: 0;">Submission Details (${table})</h2>
        <table style="width: 100%; border-collapse: collapse;">
          ${tableRows}
        </table>
        <div style="margin-top: 30px; padding: 20px; background-color: #f8fafc; border-radius: 8px; font-size: 14px; color: #64748b;">
          <strong>Action Required:</strong> Please log in to your Supabase dashboard or contact the person directly via the details provided above.
        </div>
      </div>
    </div>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Kaya Care Co <admin@kayacareco.com.au>',
      to: ['thechiragluitel@gmail.com', 'info.kayacareco@gmail.com'],
      subject: subject,
      html: htmlContent,
    }),
  })

  return new Response(JSON.stringify({ status: 'sent' }), { 
    headers: { 'Content-Type': 'application/json' } 
  })
})