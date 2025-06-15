// src/components/About.tsx
import React, { useContext } from 'react';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useContext(LanguageContext);

  const features = [
    {
      icon: Users,
      title: t('about.features.expert_team.title'),
      description: t('about.features.expert_team.description'),
    },
    {
      icon: Award,
      title: t('about.features.proven_results.title'),
      description: t('about.features.proven_results.description'),
    },
    {
      icon: Globe,
      title: t('about.features.local_reach.title'),
      description: t('about.features.local_reach.description'),
    },
    {
      icon: TrendingUp,
      title: t('about.features.growth_focused.title'),
      description: t('about.features.growth_focused.description'),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('about.title')}</h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">{t('about.description')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Indian Agricultural Innovation"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">{t('about.subheading')}</h3>
            <p className="text-text/70 leading-relaxed">{t('about.text1')}</p>
            <div className="bg-gradient-to-r from-accent/20 to-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <p className="text-text font-medium">{t('about.highlight')}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-accent/20 to-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-accent/30 group-hover:to-primary/20 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">{feature.title}</h4>
              <p className="text-text/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;