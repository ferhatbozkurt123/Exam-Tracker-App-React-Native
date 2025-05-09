# ExamTrackerApp

ExamTrackerApp, öğrencilerin sınavlarını ve çalışma programlarını takip etmelerine yardımcı olan bir React Native mobil uygulamasıdır.

## 🚀 Özellikler

- Sınav takibi ve planlaması
- Çalışma programı oluşturma
- Sınav sonuçlarını kaydetme ve analiz etme
- Hatırlatıcılar ve bildirimler
- Kullanıcı dostu arayüz

## 🛠 Teknolojiler

- React Native 0.79.2
- React Navigation 7.x
- TypeScript
- React 19.0.0

## 📋 Gereksinimler

- Node.js >= 18
- React Native CLI
- iOS için Xcode (macOS)
- Android için Android Studio
- CocoaPods (iOS için)

## 🚀 Kurulum

1. Projeyi klonlayın:
```bash
git clone [repo-url]
cd ExamTrackerApp
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. iOS için ek kurulum:
```bash
cd ios
pod install
cd ..
```

4. Uygulamayı başlatın:

iOS için:
```bash
npm run ios
```

Android için:
```bash
npm run android
```

## 📱 Uygulama Yapısı

```
src/
├── assets/        # Resimler, fontlar ve diğer statik dosyalar
├── components/    # Yeniden kullanılabilir UI bileşenleri
├── navigation/    # Navigasyon yapılandırması
└── screens/       # Uygulama ekranları
```

## 🛠 Geliştirme

- `npm start`: Metro bundler'ı başlatır
- `npm run ios`: iOS uygulamasını başlatır
- `npm run android`: Android uygulamasını başlatır
- `npm run lint`: ESLint ile kod kontrolü yapar
- `npm test`: Jest ile testleri çalıştırır

## 📝 Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.

## 👥 Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir özellik dalı oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Dalınıza push edin (`git push origin feature/amazing-feature`)
5. Bir Pull Request oluşturun

## 📞 İletişim

Proje Sahibi - [@your-username](https://github.com/your-username)

Proje Linki: [https://github.com/your-username/ExamTrackerApp](https://github.com/your-username/ExamTrackerApp)
