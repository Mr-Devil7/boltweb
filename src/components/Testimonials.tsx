// src/components/Testimonials.tsx
import React, { useContext } from 'react';
import { Star, Quote } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useContext(LanguageContext);

  const testimonials = [
    {
      name: t('testimonials.items.0.name'),
      role: t('testimonials.items.0.role'),
      location: t('testimonials.items.0.location'),
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: t('testimonials.items.0.text'),
    },
    {
      name: t('testimonials.items.1.name'),
      role: t('testimonials.items.1.role'),
      location: t('testimonials.items.1.location'),
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: t('testimonials.items.1.text'),
    },
    {
      name: t('testimonials.items.2.name'),
      role: t('testimonials.items.2.role'),
      location: t('testimonials.items.2.location'),
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: t('testimonials.items.2.text'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('testimonials.description')}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_,
