'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, Check } from 'lucide-react';
import config from '../../site-config.json';
import { cn } from '@/lib/utils';

interface FormData {
  [key: string]: any;
}

export function SmartForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { steps_config, title } = config.smart_form_component;
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const totalSteps = steps_config.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const stepData = steps_config[currentStep];

  const handleInputChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('Form Data Submitted:', formData);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm animate-in fade-in duration-300">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center relative overflow-hidden">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
             <X size={24} />
          </button>

          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 animate-bounce">
            <Check size={40} strokeWidth={3} />
          </div>

          <h3 className="text-2xl font-heading font-bold text-secondary mb-2">Demande Reçue !</h3>
          <p className="text-muted-foreground mb-6">
            Votre demande a été transmise en priorité à notre équipe d'admission.
            <br />
            <strong>Nous revenons vers vous sous 2h.</strong>
          </p>

          <Button onClick={onClose} className="w-full bg-primary font-bold rounded-pill">
            Retour au site
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-secondary/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full flex flex-col max-h-[90vh] overflow-hidden relative">

        {/* PROGRESS BAR */}
        <div className="h-2 bg-gray-100 w-full">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* HEADER */}
        <div className="px-8 py-6 border-b border-gray-50 flex justify-between items-center bg-white">
          <div className="flex items-center gap-3">
             {currentStep > 0 && (
               <button onClick={handleBack} className="text-gray-400 hover:text-brand transition-colors p-1 rounded-full hover:bg-brand/5">
                 <ChevronLeft size={24} />
               </button>
             )}
            <div>
              <p className="text-xs font-bold text-brand uppercase tracking-wider mb-1">ÉTAPE {currentStep + 1}/{totalSteps}</p>
              <h2 className="text-xl font-bold text-secondary leading-none">{stepData.label}</h2>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-white">
          <div className="animate-in slide-in-from-right-4 duration-300">
             {/* Fields Generation */}
             {stepData.fields.map((field: any) => (
               <div key={field.id} className="mb-6 last:mb-0">
                 {field.label && field.type !== 'card_select' && (
                   <label className="block text-sm font-bold text-gray-700 mb-2">{field.label}</label>
                 )}

                 {field.type === 'text' || field.type === 'email' || field.type === 'tel' || field.type === 'number' ? (
                   <input
                     type={field.type}
                     placeholder={field.placeholder}
                     value={formData[field.id] || ''}
                     onChange={(e) => handleInputChange(field.id, e.target.value)}
                     className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all font-medium text-secondary"
                     autoFocus={currentStep === 0 && field.id === 'struct_name'}
                   />
                 ) : field.type === 'select' ? (
                   <select
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all font-medium text-secondary bg-white"
                   >
                     <option value="" disabled>Sélectionnez...</option>
                     {field.options.map((opt: string) => (
                       <option key={opt} value={opt}>{opt}</option>
                     ))}
                   </select>
                 ) : field.type === 'textarea' ? (
                   <textarea
                      placeholder={field.placeholder}
                      maxLength={field.max_chars}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all font-medium text-secondary min-h-[100px]"
                   />
                 ) : field.type === 'radio' ? (
                    <div className="space-y-3">
                      {field.options.map((opt: string) => (
                        <label key={opt} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${formData[field.id] === opt ? 'border-brand bg-brand/5 ring-1 ring-brand' : 'border-gray-200 hover:border-gray-300'}`}>
                          <input
                            type="radio"
                            name={field.id}
                            value={opt}
                            checked={formData[field.id] === opt}
                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                            className="w-5 h-5 text-brand focus:ring-brand"
                          />
                          <span className="font-medium text-secondary">{opt}</span>
                        </label>
                      ))}
                    </div>
                 ) : field.type === 'card_select' ? (
                    <div className="grid md:grid-cols-3 gap-4">
                      {field.options.map((opt: any) => (
                        <div
                          key={opt.value}
                          onClick={() => handleInputChange(field.id, opt.value)}
                          className={`cursor-pointer border-2 rounded-xl p-4 text-center hover:shadow-md transition-all ${formData[field.id] === opt.value ? 'border-brand bg-brand/5 scale-105' : 'border-gray-100 hover:border-brand/30 bg-gray-50'}`}
                        >
                           <div className="text-3xl mb-2">{opt.icon}</div>
                           <h4 className="font-bold text-secondary text-sm mb-1">{opt.value}</h4>
                           <p className="text-xs text-muted-foreground leading-tight">{opt.desc}</p>
                        </div>
                      ))}
                    </div>
                 ) : null}
               </div>
             ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-6 border-t border-gray-50 bg-gray-50 flex justify-end">
          <Button
            onClick={handleNext}
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 bg-primary hover:bg-primary-600 text-white font-bold rounded-pill shadow-lg shadow-primary/20 text-lg py-6"
          >
            {isSubmitting ? 'Envoi en cours...' : (stepData.submit_label || 'CONTINUER →')}
          </Button>
        </div>

      </div>
    </div>
  );
}
