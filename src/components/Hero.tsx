// src/components/Hero.tsx
import React, { useContext } from 'react';
import { ArrowRight, Sprout, Zap, Target } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.headline')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">{t('hero.description')}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>{t('hero.view_products')}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-medium hover:bg-orange-50 transition-colors"
              >
                {t('hero.get_started')}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">500+</div>
                <div className="text-gray-600">{t('hero.stats.happy_farmers')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">98%</div>
                <div className="text-gray-600">{t('hero.stats.success_rate')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-gray-600">{t('hero.stats.support')}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern Indian Agriculture"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20 border-l-4 border-green-600">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Sprout className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">{t('hero.cards.smart_farming')}</div>
                  <div className="text-sm text-gray-500">{t('hero.cards.smart_farming_sub')}</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20 border-l-4 border-blue-600">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">{t('hero.cards.iot_sensors')}</div>
                  <div className="text-sm text-gray-500">{t('hero.cards.iot_sensors_sub')}</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-white p-4 rounded-xl shadow-lg z-20 border-l-4 border-orange-600">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-medium">{t('hero.cards.precision_agriculture')}</div>
                  <div className="text-sm text-gray-500">{t('hero.cards.precision_agriculture_sub')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
