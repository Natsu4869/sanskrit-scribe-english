
import { TranslationBox } from "@/components/ui/TranslationBox";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat p-6" 
         style={{
           backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')`, 
           backgroundBlendMode: 'soft-light',
           backgroundColor: 'rgba(255,255,255,0.7)'
         }}>
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto bg-white/80 rounded-xl p-8 shadow-lg">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-playfair font-bold text-sanskrit-accent">
            Sanskrit to English Translation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your Sanskrit text below to receive an English translation
          </p>
        </div>
        
        <TranslationBox />
      </main>
      
      <footer className="mt-8 text-sm text-gray-500">
        © 2025 Sanskrit Translation Service
      </footer>
    </div>
  );
};

export default Index;
