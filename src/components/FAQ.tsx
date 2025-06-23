
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How accurate is the AI transcription?',
      answer: 'Our AI transcription achieves 99% accuracy with support for multiple languages, accents, and background noise filtering.'
    },
    {
      question: 'What meeting platforms do you support?',
      answer: 'We support all major platforms including Zoom, Google Meet, Microsoft Teams, and can process uploaded audio/video files.'
    },
    {
      question: 'Is my meeting data secure?',
      answer: 'Yes, we use enterprise-grade encryption and comply with GDPR, SOC 2, and other security standards. Your data is never shared with third parties.'
    },
    {
      question: 'Can I customize the summary format?',
      answer: 'Absolutely! You can create custom templates and adjust the AI focus to match your specific meeting types and organizational needs.'
    },
    {
      question: 'Do you offer API access?',
      answer: 'Yes, our Enterprise plan includes full API access for custom integrations with your existing workflow tools.'
    },
    {
      question: 'What languages are supported?',
      answer: 'We support over 50 languages including English, Spanish, French, German, Chinese, Japanese, and many more.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about SmartMeet
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
