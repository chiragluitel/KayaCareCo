import { useState, useTransition } from 'react';
import { supabase } from '../config/supabase';

export const useGetInTouchForm = () => {
  const [isPending, startTransition] = useTransition(); 
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitAction = (formData: FormData) => {
    startTransition(async () => {
      setError(null);
      
      const data = Object.fromEntries(formData.entries());
      
      const { error: supabaseError } = await supabase
        .from('enquiries')
        .insert([{
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
          service_of_interest: data.serviceOfInterest, // Captures the hidden input
        }]);

      if (supabaseError) {
        console.error("Enquiry submission failed:", supabaseError);
        setError("Something went wrong sending your message. Please try again.");
        return;
      }

      setIsSuccess(true);
    });
  };

  return { isPending, isSuccess, error, submitAction };
};