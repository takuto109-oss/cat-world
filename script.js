// DOM要素の取得
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const contactForm = document.querySelector('.contact-form');
const heroButtons = document.querySelectorAll('.hero-buttons button');

// モバイルナビゲーションの切り替え
function toggleMobileNav() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // ハンバーガーメニューのアニメーション
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// ナビゲーションリンクのクリック処理
function handleNavClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        // スムーススクロール
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // モバイルメニューを閉じる
        if (navMenu.classList.contains('active')) {
            toggleMobileNav();
        }
    }
}

// スクロール時のナビバー変更
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // セクションのフェードイン効果
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition > sectionTop - windowHeight + 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// お問い合わせフォームの送信処理
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // ローディング状態
    submitButton.innerHTML = '<span class="loading"></span> 送信中...';
    submitButton.disabled = true;
    
    // 実際のフォーム送信をシミュレート（2秒後に完了）
    setTimeout(() => {
        // 成功メッセージを表示
        showNotification('お問い合わせを送信しました。ありがとうございます！', 'success');
        
        // フォームをリセット
        e.target.reset();
        
        // ボタンを元に戻す
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// 通知メッセージの表示
function showNotification(message, type = 'info') {
    // 通知要素を作成
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // スタイルを適用
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // タイプに応じて背景色を設定
    switch(type) {
        case 'success':
            notification.style.background = '#28a745';
            break;
        case 'error':
            notification.style.background = '#dc3545';
            break;
        case 'warning':
            notification.style.background = '#ffc107';
            notification.style.color = '#333';
            break;
        default:
            notification.style.background = '#17a2b8';
    }
    
    // ページに追加
    document.body.appendChild(notification);
    
    // アニメーションで表示
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 3秒後に削除
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 統計カウンターのアニメーション
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
        const duration = 2000; // 2秒
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString() + (counter.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString() + (counter.textContent.includes('+') ? '+' : '');
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats')) {
                    // 統計セクションが表示されたらカウンターアニメーションを開始
                    animateCounters();
                    observer.unobserve(entry.target);
                }
                
                // フェードインアニメーション
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);
    
    // 監視対象要素を設定
    const animatedElements = document.querySelectorAll('.features, .stats, .about, .contact');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ヒーローボタンのクリック処理
function handleHeroButtonClick(e) {
    const buttonText = e.target.textContent;
    
    if (buttonText.includes('今すぐ始める')) {
        // 特徴セクションにスクロール
        document.querySelector('#features').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else if (buttonText.includes('詳細を見る')) {
        // Aboutセクションにスクロール
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// パララックス効果
function handleParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;
    
    if (scrolled < heroHeight) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
}

// スムーズスクロールのポリフィル
function smoothScrollPolyfill() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js';
        document.head.appendChild(script);
    }
}

// フォームバリデーション
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#e9ecef';
        }
        
        // メールアドレスの形式チェック
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.style.borderColor = '#dc3545';
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// キーボードナビゲーション
function handleKeyboardNavigation(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMobileNav();
    }
}

// 初期化関数
function init() {
    // イベントリスナーの設定
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileNav);
    }
    
    // ナビゲーションリンクのクリックイベント
    document.querySelectorAll('.nav-menu a, .footer-section a').forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', handleNavClick);
        }
    });
    
    // スクロールイベント
    window.addEventListener('scroll', () => {
        handleScroll();
        handleParallax();
    });
    
    // フォーム送信イベント
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // リアルタイムバリデーション
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateForm(contactForm));
        });
    }
    
    // ヒーローボタンのクリックイベント
    heroButtons.forEach(button => {
        button.addEventListener('click', handleHeroButtonClick);
    });
    
    // キーボードイベント
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Intersection Observer の設定
    setupIntersectionObserver();
    
    // スムーズスクロールのポリフィル
    smoothScrollPolyfill();
    
    // ページ読み込み完了時の処理
    window.addEventListener('load', () => {
        // プリローダーがある場合の処理
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
        
        // 初期アニメーション
        document.body.style.opacity = '1';
    });
}

// DOMContentLoaded時に初期化
document.addEventListener('DOMContentLoaded', init);

// ウィンドウリサイズ時の処理
window.addEventListener('resize', () => {
    // モバイルメニューが開いている状態で画面サイズが変わった場合の処理
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        toggleMobileNav();
    }
});

// ページ離脱時の確認（フォームに入力がある場合）
window.addEventListener('beforeunload', (e) => {
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
    let hasInput = false;
    
    formInputs.forEach(input => {
        if (input.value.trim()) {
            hasInput = true;
        }
    });
    
    if (hasInput) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// ServiceWorkerの登録（PWA対応）
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}