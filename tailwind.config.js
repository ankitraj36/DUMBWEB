export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#06070A',
        surface: {
          DEFAULT: '#0C0E14',
          raised: '#12151E',
          overlay: '#181C28',
        },
        brand: {
          DEFAULT: '#6366F1',
          light: '#A5B4FC',
          dark: '#4338CA',
          glow: 'rgba(99, 102, 241, 0.15)',
        },
        accent: {
          cyan: '#22D3EE',
          purple: '#C084FC',
          emerald: '#34D399',
          rose: '#FB7185',
          amber: '#FBBF24',
        },
        mist: '#0F1119',
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.06)',
          hover: 'rgba(255, 255, 255, 0.06)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'aurora': 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(34,211,238,0.08) 50%, rgba(192,132,252,0.12) 100%)',
        'aurora-strong': 'linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(34,211,238,0.15) 50%, rgba(192,132,252,0.2) 100%)',
        'glow-radial': 'radial-gradient(ellipse at 50% -20%, rgba(99,102,241,0.15) 0%, transparent 60%)',
        'glow-bottom': 'radial-gradient(ellipse at 50% 120%, rgba(99,102,241,0.1) 0%, transparent 60%)',
        'mesh': 'radial-gradient(at 20% 80%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(34,211,238,0.06) 0%, transparent 50%), radial-gradient(at 50% 50%, rgba(192,132,252,0.04) 0%, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 60px -12px rgba(99, 102, 241, 0.25)',
        'glow-sm': '0 0 30px -8px rgba(99, 102, 241, 0.2)',
        'glow-lg': '0 0 100px -20px rgba(99, 102, 241, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 16px 64px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}
