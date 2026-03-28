import { useState, useTransition } from 'react';
import { supabase } from '../config/supabase';

export const useReferralForm = () => {
  const [isPending, startTransition] = useTransition(); 
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitAction = (formData: FormData) => {
    startTransition(async () => {
      setError(null);
      
      const data = Object.fromEntries(formData.entries());
      
      const { error: supabaseError } = await supabase
        .from('referrals')
        .insert([{
          // Referrer Details
          referral_name: data.referralName,
          referral_organisation_name: data.referralOrganisationName,
          referral_address: data.referallAddress, 
          referral_phone: data.referralPhone,
          referral_email: data.referralEmail,
          
          // Participant Details
          participant_name: data.participantName,
          dob: data.dob,
          ndis_number: data.ndisNumber,
          plan_dates: data.planDates,
          participant_phone: data.participantPhone,
          participant_email: data.participantEmail,
          address: data.address,
          disability: data.disability,
          
          // Service Requirements
          service_type: data.serviceType,
          plan_management: data.planManagement,
          frequency: data.frequency,
          planner_details: data.plannerDetails,
          goals: data.goals,
        }]);

      if (supabaseError) {
        console.error("Submission failed:", supabaseError);
        setError("Something went wrong submitting your referral.");
        return;
      }

      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  return { isPending, isSuccess, error, submitAction };
};