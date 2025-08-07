import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const frontendStack = [
    { name: 'HTML5', icon: 'Code', color: 'bg-orange-500' },
    { name: 'CSS3', icon: 'Palette', color: 'bg-blue-400' },
    { name: 'JavaScript (ES6+)', icon: 'Zap', color: 'bg-yellow-500' },
    { name: 'React', icon: 'Component', color: 'bg-blue-500' },
    { name: 'TypeScript', icon: 'FileText', color: 'bg-blue-600' },
    { name: 'Redux', icon: 'Database', color: 'bg-purple-600' },
    { name: 'Zustand', icon: 'Box', color: 'bg-orange-600' }
  ];

  const backendStack = [
    { name: 'Node.JS', icon: 'Server', color: 'bg-green-600' }
  ];

  const otherStack = [
    { name: 'Telegram Bot API', icon: 'Bot', color: 'bg-blue-500' }
  ];

  const services = [
    {
      title: 'Вёрстка лендинга',
      description: 'Современный, адаптивный дизайн',
      price: 'от $40',
      icon: 'Layout'
    },
    {
      title: 'Копия сайтов',
      description: 'Точный повтор функционала и UI',
      price: 'от $10',
      icon: 'Copy'
    },
    {
      title: 'Правки в проект',
      description: 'Исправление багов, доработки',
      price: 'от $50',
      icon: 'Wrench'
    },
    {
      title: 'Telegram-боты',
      description: 'Автоматизация, полезные функции',
      price: 'от $100',
      icon: 'Bot'
    }
  ];

  const projects = [
    {
      title: 'E-commerce платформа',
      description: 'React + TypeScript магазин с админкой',
      tech: ['React', 'TypeScript', 'Node.js'],
      image: '/img/4a467f0c-fdd7-4eeb-8947-280f5001ac91.jpg'
    },
    {
      title: 'Telegram бот-помощник',
      description: 'Автоматизация бизнес-процессов',
      tech: ['Node.js', 'Telegram API'],
      image: '/img/947c6ead-8ad1-4fd4-ad56-9b7a73e52c37.jpg'
    },
    {
      title: 'Dashboard аналитики',
      description: 'Интерактивная панель с графиками',
      tech: ['React', 'Redux', 'Charts.js'],
      image: '/img/ac601560-7908-470b-a3c6-c456bcac6df0.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-secondary rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-40 w-12 h-12 bg-primary rounded-full opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Привет! Я — <span className="gradient-text">&lt;Devlyst /&gt;</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              fullstack-разработчик с фокусом на <span className="font-semibold text-gray-800">чистый код</span> и современные технологии. 
              Специализируюсь на создании интуитивных и быстрых веб-интерфейсов, а также могу реализовать лёгкий бекенд. 
              <span className="text-primary font-medium">Работаю быстро, ответственно и с душой.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться в Telegram
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full">
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-500">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-gray-500">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-gray-500">Качество</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Стэк технологий</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Использую современные технологии для создания быстрых и надежных решений
            </p>
          </div>

          {/* Frontend Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Frontend:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {frontendStack.map((tech, index) => (
                <Card key={tech.name} className="card-hover cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 ${tech.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon name={tech.icon as any} size={20} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-xs text-gray-800">{tech.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-secondary">Backend:</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-4">
                {backendStack.map((tech, index) => (
                  <Card key={tech.name} className="card-hover cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon name={tech.icon as any} size={24} className="text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800">{tech.name}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Other Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Другое:</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-4">
                {otherStack.map((tech, index) => (
                  <Card key={tech.name} className="card-hover cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon name={tech.icon as any} size={24} className="text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800">{tech.name}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Strengths */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
              <Icon name="Smartphone" size={32} className="text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Адаптивная вёрстка</h4>
              <p className="text-sm text-gray-600">идеально на всех устройствах</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl">
              <Icon name="Zap" size={32} className="text-secondary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Оптимизация</h4>
              <p className="text-sm text-gray-600">скорость загрузки как у SpaceX</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
              <Icon name="Shield" size={32} className="text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">React + TypeScript</h4>
              <p className="text-sm text-gray-600">минимум багов, максимум структуры</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl">
              <Icon name="Bot" size={32} className="text-secondary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Node.JS & Telegram Bots</h4>
              <p className="text-sm text-gray-600">быстрая и надежная серверная логика</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Портфолио</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Примеры проектов, которые демонстрируют мой опыт и подход к разработке
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Услуги</h3>
            <p className="text-gray-600">Что я могу сделать для вашего бизнеса</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Готов к сотрудничеству?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Обсудим ваш проект и найдём лучшее решение для вашего бизнеса
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              @Devlyst в Telegram
            </Button>
          </div>

          <div className="text-gray-400">
            <p>📩 Telegram: <span className="text-primary">@Devlyst</span></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;