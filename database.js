// 猫データベース - 実用的なサンプルデータ
const catsDatabase = [
    {
        id: 1,
        name: "ペルシャ",
        breed: "ペルシャ",
        age: "成猫",
        size: "中型",
        origin: "イラン",
        temperament: ["穏やか", "優雅", "愛情深い"],
        lifespan: "12-17年",
        weight: "3.5-5.5kg",
        description: "長毛で美しい毛並みが特徴的な品種。穏やかで優雅な性格で、室内飼いに適しています。",
        care: {
            grooming: "毎日",
            exercise: "軽度",
            health: ["多発性嚢胞腎", "呼吸器疾患に注意"]
        },
        colors: ["ホワイト", "ブラック", "ブルー", "レッド"],
        price_range: "15-30万円",
        popularity: 9,
        image: "🐱"
    },
    {
        id: 2,
        name: "メインクーン",
        breed: "メインクーン",
        age: "成猫",
        size: "大型",
        origin: "アメリカ",
        temperament: ["フレンドリー", "知的", "穏やか"],
        lifespan: "13-16年",
        weight: "4-8kg",
        description: "北米最大の猫種。大きな体と房毛のある耳が特徴。家族思いで子供にも優しい。",
        care: {
            grooming: "週2-3回",
            exercise: "中程度",
            health: ["肥大型心筋症", "股関節形成不全に注意"]
        },
        colors: ["ブラウンタビー", "シルバータビー", "ソリッド"],
        price_range: "20-40万円",
        popularity: 8,
        image: "🦁"
    },
    {
        id: 3,
        name: "スコティッシュフォールド",
        breed: "スコティッシュフォールド",
        age: "成猫",
        size: "中型",
        origin: "スコットランド",
        temperament: ["甘えん坊", "穏やか", "人懐っこい"],
        lifespan: "11-15年",
        weight: "2.5-6kg",
        description: "折れ耳が愛らしい人気品種。甘えん坊で人懐っこく、家族との時間を大切にします。",
        care: {
            grooming: "週1-2回",
            exercise: "軽度",
            health: ["軟骨異形成症", "関節疾患に注意"]
        },
        colors: ["全色対応"],
        price_range: "10-25万円",
        popularity: 10,
        image: "😺"
    },
    {
        id: 4,
        name: "ロシアンブルー",
        breed: "ロシアンブルー",
        age: "成猫",
        size: "中型",
        origin: "ロシア",
        temperament: ["シャイ", "忠実", "知的"],
        lifespan: "15-20年",
        weight: "3-5kg",
        description: "シルバーブルーの美しい毛色と緑の瞳が印象的。シャイですが飼い主には忠実です。",
        care: {
            grooming: "週1回",
            exercise: "中程度",
            health: ["比較的健康", "定期検診推奨"]
        },
        colors: ["ブルー"],
        price_range: "15-30万円",
        popularity: 7,
        image: "💙"
    },
    {
        id: 5,
        name: "ラグドール",
        breed: "ラグドール",
        age: "成猫",
        size: "大型",
        origin: "アメリカ",
        temperament: ["おとなしい", "愛情深い", "従順"],
        lifespan: "12-17年",
        weight: "4-9kg",
        description: "抱かれるとぐったりするほど従順な性格から「ラグドール（布人形）」と名付けられました。",
        care: {
            grooming: "毎日",
            exercise: "軽度",
            health: ["肥大型心筋症", "泌尿器疾患に注意"]
        },
        colors: ["ポイントカラー", "ミテッド", "バイカラー"],
        price_range: "20-35万円",
        popularity: 8,
        image: "🎎"
    },
    {
        id: 6,
        name: "ブリティッシュショートヘア",
        breed: "ブリティッシュショートヘア",
        age: "成猫",
        size: "中型",
        origin: "イギリス",
        temperament: ["独立心旺盛", "穏やか", "忍耐強い"],
        lifespan: "14-20年",
        weight: "3-7kg",
        description: "丸い顔と密な毛質が特徴。独立心が強く、適度な距離感を保つのが得意です。",
        care: {
            grooming: "週1-2回",
            exercise: "軽度",
            health: ["肥大型心筋症", "多発性嚢胞腎に注意"]
        },
        colors: ["ブルー", "シルバー", "ゴールド", "クリーム"],
        price_range: "15-30万円",
        popularity: 7,
        image: "🇬🇧"
    }
];

// 記事データベース
const articlesDatabase = [
    {
        id: 1,
        title: "猫の健康チェックポイント：毎日観察すべき5つのサイン",
        excerpt: "愛猫の健康状態を毎日チェックするための重要なポイントを獣医師が解説します。",
        content: "猫は痛みを隠すのが上手な動物です。飼い主が毎日観察することで、早期発見・早期治療につながります...",
        author: "田中獣医師",
        date: "2024-01-15",
        category: "健康管理",
        tags: ["健康", "病気予防", "チェックリスト"],
        readTime: "5分",
        image: "🏥",
        featured: true
    },
    {
        id: 2,
        title: "室内飼い猫のための環境エンリッチメント",
        excerpt: "室内で飼っている猫が退屈しないための工夫と環境作りについて詳しく解説します。",
        content: "室内飼いの猫にとって、刺激的で豊かな環境を作ることは非常に重要です...",
        author: "佐藤動物行動学者",
        date: "2024-01-12",
        category: "ライフスタイル",
        tags: ["室内飼い", "環境", "ストレス軽減"],
        readTime: "7分",
        image: "🏠",
        featured: false
    },
    {
        id: 3,
        title: "猫の年齢別栄養管理：子猫からシニアまで",
        excerpt: "猫のライフステージに合わせた適切な栄養管理について、専門家が詳しく説明します。",
        content: "猫の栄養要求は年齢とともに変化します。適切な栄養管理で健康的な一生をサポートしましょう...",
        author: "山田栄養士",
        date: "2024-01-10",
        category: "栄養",
        tags: ["栄養", "年齢別", "食事管理"],
        readTime: "6分",
        image: "🍽️",
        featured: true
    },
    {
        id: 4,
        title: "猫の多頭飼いを成功させるコツ",
        excerpt: "複数の猫を飼う際の注意点と、猫同士の関係を良好に保つためのテクニックを紹介します。",
        content: "多頭飼いは猫にとっても飼い主にとっても大きな変化です。成功のための準備と心構えが重要です...",
        author: "鈴木トレーナー",
        date: "2024-01-08",
        category: "行動",
        tags: ["多頭飼い", "社会化", "ストレス管理"],
        readTime: "8分",
        image: "👥",
        featured: false
    }
];

// 製品データベース
const productsDatabase = [
    {
        id: 1,
        name: "プレミアムキャットタワー デラックス",
        price: 15800,
        originalPrice: 19800,
        description: "高さ180cmの本格キャットタワー。多層構造で複数の猫が同時に楽しめます。",
        image: "🗼",
        category: "家具・インテリア",
        rating: 4.8,
        reviews: 324,
        inStock: true,
        features: ["組み立て簡単", "安定設計", "爪とぎ付き", "隠れ家スペース"],
        brand: "ニャンコファニチャー",
        shipping: "送料無料"
    },
    {
        id: 2,
        name: "オーガニックキャットフード グレインフリー",
        price: 3200,
        originalPrice: null,
        description: "無添加・グレインフリーの高品質キャットフード。全年齢対応。",
        image: "🥘",
        category: "フード",
        rating: 4.9,
        reviews: 567,
        inStock: true,
        features: ["グレインフリー", "無添加", "全年齢対応", "消化に優しい"],
        brand: "ピュアペット",
        shipping: "送料無料（3個以上）"
    },
    {
        id: 3,
        name: "自動給水器 スマート",
        price: 8900,
        originalPrice: 10900,
        description: "UV殺菌機能付き自動給水器。いつでも新鮮な水を提供します。",
        image: "⛲",
        category: "給水器",
        rating: 4.6,
        reviews: 189,
        inStock: true,
        features: ["UV殺菌", "静音設計", "大容量2.5L", "フィルター交換式"],
        brand: "テックペット",
        shipping: "送料600円"
    },
    {
        id: 4,
        name: "猫用ブラッシングセット",
        price: 2400,
        originalPrice: null,
        description: "長毛・短毛両対応のプロ仕様ブラッシングセット。",
        image: "🖌️",
        category: "グルーミング",
        rating: 4.7,
        reviews: 432,
        inStock: false,
        features: ["プロ仕様", "長毛短毛対応", "抜け毛除去", "マッサージ効果"],
        brand: "グルームプロ",
        shipping: "送料無料"
    },
    {
        id: 5,
        name: "インタラクティブおもちゃ レーザーポインター",
        price: 1800,
        originalPrice: null,
        description: "自動動作するレーザーポインター。猫の運動不足解消に最適。",
        image: "🔴",
        category: "おもちゃ",
        rating: 4.4,
        reviews: 298,
        inStock: true,
        features: ["自動動作", "安全設計", "USB充電", "タイマー機能"],
        brand: "プレイテック",
        shipping: "送料400円"
    },
    {
        id: 6,
        name: "猫用ベッド クラウド",
        price: 4500,
        originalPrice: 5500,
        description: "雲のようにふわふわな極上の寝心地。洗濯機で洗えるカバー付き。",
        image: "☁️",
        category: "ベッド・クッション",
        rating: 4.9,
        reviews: 156,
        inStock: true,
        features: ["ふわふわ素材", "洗濯可能", "滑り止め付き", "Sサイズ〜Lサイズ"],
        brand: "コンフォートペット",
        shipping: "送料無料"
    }
];

// 予約・サービス関連データ
const servicesData = {
    consultation: {
        name: "オンライン相談",
        duration: "30分",
        price: 1500,
        description: "経験豊富な獣医師によるオンライン相談サービス",
        availableSlots: [
            "2024-01-20 10:00", "2024-01-20 14:00", "2024-01-20 16:00",
            "2024-01-21 09:00", "2024-01-21 13:00", "2024-01-21 15:00"
        ]
    },
    grooming: {
        name: "グルーミング",
        duration: "90分",
        price: 5000,
        description: "プロのトリマーによる本格グルーミングサービス",
        availableSlots: [
            "2024-01-22 10:00", "2024-01-22 13:00", "2024-01-22 15:30",
            "2024-01-23 09:30", "2024-01-23 12:00", "2024-01-23 14:30"
        ]
    },
    sitting: {
        name: "ペットシッター",
        duration: "1日",
        price: 3000,
        description: "信頼できるペットシッターがあなたの大切な猫をお世話",
        availableSlots: [
            "2024-01-25", "2024-01-26", "2024-01-27",
            "2024-01-28", "2024-01-29", "2024-01-30"
        ]
    }
};

// 多言語対応データ
const translations = {
    ja: {
        nav: {
            home: "ホーム",
            database: "猫データベース",
            articles: "記事",
            products: "グッズ",
            services: "サービス",
            about: "About",
            contact: "お問い合わせ",
            login: "ログイン",
            signup: "会員登録"
        },
        hero: {
            title: "猫との素敵な生活を始めよう",
            description: "ニャンコ・ワールドは、猫愛好家のための総合情報サイトです。猫の飼育方法、健康管理、おすすめグッズまで、あなたの猫ライフをサポートします。",
            cta1: "今すぐ始める",
            cta2: "詳細を見る"
        },
        search: {
            title: "猫の情報を検索",
            placeholder: "品種、年齢、特徴で検索...",
            breed: "品種",
            age: "年齢",
            size: "サイズ",
            all: "すべて"
        }
    },
    en: {
        nav: {
            home: "Home",
            database: "Cat Database",
            articles: "Articles",
            products: "Products",
            services: "Services",
            about: "About",
            contact: "Contact",
            login: "Login",
            signup: "Sign Up"
        },
        hero: {
            title: "Start a Wonderful Life with Cats",
            description: "Nyanko World is a comprehensive information site for cat lovers. From cat care methods to health management and recommended products, we support your cat life.",
            cta1: "Get Started",
            cta2: "Learn More"
        },
        search: {
            title: "Search Cat Information",
            placeholder: "Search by breed, age, characteristics...",
            breed: "Breed",
            age: "Age",
            size: "Size",
            all: "All"
        }
    },
    ko: {
        nav: {
            home: "홈",
            database: "고양이 데이터베이스",
            articles: "기사",
            products: "상품",
            services: "서비스",
            about: "소개",
            contact: "문의",
            login: "로그인",
            signup: "회원가입"
        },
        hero: {
            title: "고양이와 함께하는 멋진 삶을 시작하세요",
            description: "냥코 월드는 고양이 애호가를 위한 종합 정보 사이트입니다. 고양이 사육법, 건강 관리, 추천 용품까지, 당신의 고양이 라이프를 지원합니다.",
            cta1: "시작하기",
            cta2: "자세히 보기"
        },
        search: {
            title: "고양이 정보 검색",
            placeholder: "품종, 나이, 특징으로 검색...",
            breed: "품종",
            age: "나이",
            size: "크기",
            all: "전체"
        }
    }
};

// データベース操作関数
class DatabaseManager {
    constructor() {
        this.cats = catsDatabase;
        this.articles = articlesDatabase;
        this.products = productsDatabase;
        this.services = servicesData;
        this.translations = translations;
        this.currentLanguage = 'ja';
        
        // ローカルストレージからユーザーデータを読み込み
        this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        this.userBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    }

    // 猫データベース検索
    searchCats(query, filters = {}) {
        let results = this.cats;

        // テキスト検索
        if (query) {
            const searchQuery = query.toLowerCase();
            results = results.filter(cat => 
                cat.name.toLowerCase().includes(searchQuery) ||
                cat.breed.toLowerCase().includes(searchQuery) ||
                cat.description.toLowerCase().includes(searchQuery) ||
                cat.temperament.some(trait => trait.toLowerCase().includes(searchQuery))
            );
        }

        // フィルター適用
        if (filters.breed) {
            results = results.filter(cat => cat.breed === filters.breed);
        }
        if (filters.age) {
            results = results.filter(cat => cat.age === filters.age);
        }
        if (filters.size) {
            results = results.filter(cat => cat.size === filters.size);
        }

        return results;
    }

    // お気に入り管理
    toggleFavorite(catId) {
        const index = this.favorites.indexOf(catId);
        if (index === -1) {
            this.favorites.push(catId);
        } else {
            this.favorites.splice(index, 1);
        }
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        return this.favorites.includes(catId);
    }

    getFavorites() {
        return this.cats.filter(cat => this.favorites.includes(cat.id));
    }

    // 記事取得
    getArticles(limit = null, category = null) {
        let results = this.articles;
        
        if (category) {
            results = results.filter(article => article.category === category);
        }
        
        if (limit) {
            results = results.slice(0, limit);
        }
        
        return results;
    }

    // 製品取得
    getProducts(category = null, inStockOnly = false) {
        let results = this.products;
        
        if (category) {
            results = results.filter(product => product.category === category);
        }
        
        if (inStockOnly) {
            results = results.filter(product => product.inStock);
        }
        
        return results;
    }

    // 予約管理
    addBooking(serviceType, datetime, userInfo, catInfo) {
        const booking = {
            id: Date.now(),
            serviceType,
            datetime,
            userInfo,
            catInfo,
            status: 'pending',
            createdAt: new Date().toISOString()
        };
        
        this.userBookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(this.userBookings));
        return booking;
    }

    getBookings() {
        return this.userBookings;
    }

    // ユーザー認証
    login(email, password) {
        // 実際のアプリケーションではサーバーサイドで認証処理を行う
        const mockUser = {
            id: 1,
            name: '田中 太郎',
            email: email,
            memberSince: '2024-01-15'
        };
        
        this.currentUser = mockUser;
        localStorage.setItem('currentUser', JSON.stringify(mockUser));
        return mockUser;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    // 多言語対応
    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
    }

    translate(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        return value || key;
    }
}

// グローバルデータベースインスタンス
window.db = new DatabaseManager();

// エクスポート（モジュール使用時）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DatabaseManager,
        catsDatabase,
        articlesDatabase,
        productsDatabase,
        servicesData,
        translations
    };
}