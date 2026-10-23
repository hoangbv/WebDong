import { ComparisonPoint, FAQItem, PricingTier } from '../types';

export const CONTACT_INFO = {
  telegramDirect: 'https://t.me/G2_agency007',
  telegramUser: '@G2_agency007',
  telegramSupport: 'https://t.me/g2_agency',
  telegramSupportUser: '@g2_agency',
  telegramChannel: 'https://t.me/teamg2agency',
  telegramChannelUser: '@teamg2agency',
  whatsapp: 'http://Wa.me/0399064192',
  whatsappNumber: '+84 399 064 192',
  instagram: 'https://instagram.com',
  email: 'support@g2-agency.com',
  website: 'https://g2-agency.com',
};

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    title: 'Spending Limits',
    regular: 'Strict Spending Limits. Daily ad spend is capped, making it difficult to scale Facebook campaigns efficiently.',
    agency: 'Unlimited Daily Ad Spend. Scale freely without daily budget caps slowing down your growth on Facebook.',
  },
  {
    title: 'Campaigns & Ad Sets',
    regular: 'Campaign & Ad Group Restrictions. You’re limited in how many campaigns and ad sets you can run at the same time.',
    agency: 'Unlimited Campaigns & Ad Groups. Launch, test, and expand as many Facebook campaigns as you need—no restrictions.',
  },
  {
    title: 'Support & Assistance',
    regular: 'No Direct Support from G2 Agency. You’re on your own when issues arise—no priority support, no fast resolutions.',
    agency: 'Direct Support from G2 Agency. Get fast, hands-on assistance from experts who understand both technical and strategic challenges.',
  },
  {
    title: 'Ad Review Process',
    regular: 'Challenging Ad Review Process. Ads are reviewed more strictly, leading to delays, rejections, and lost momentum.',
    agency: 'Priority in Facebook’s Review System. Your ads are reviewed faster and prioritized, reducing delays and unnecessary rejections.',
  },
  {
    title: 'Banking & Foreign Fees',
    regular: 'Higher Banking Fees. Additional bank charges slowly eat into your Facebook advertising profits.',
    agency: 'No Foreign Transaction Fees. Lower costs mean higher profit margins on every Facebook campaign.',
  },
  {
    title: 'Platform Support Response',
    regular: 'Slow automated ticket resolution with frequent robotic rejections.',
    agency: 'Priority Facebook Support. Enjoy faster resolutions and fewer interruptions when issues arise.',
  },
  {
    title: 'Account Stability & Risk',
    regular: 'Higher Risk of Account Suspension. Frequent lockouts and unexpected campaign rejections disrupt performance.',
    agency: 'High Stability & Risk Protection. Agency-level infrastructure minimizes shutdowns and ensures smoother operations.',
  },
  {
    title: 'Refund & Balance Security',
    regular: 'No Balance Withdrawal. Unused ad balance cannot be withdrawn, locking up your cash flow.',
    agency: 'Exclusive Refund & Cashback Policies. Recover costs and maximize ROI with G2 Agency–only benefits. 100% refund of unspent funds.',
  },
  {
    title: 'Fund Relocation if Restricted',
    regular: 'Locked funds if the account gets disabled. Total loss of remaining cash.',
    agency: 'Flexible Fund Transfers. Easily move balances between accounts if an account is restricted or blocked.',
  },
  {
    title: 'Testing Environment & Verticals',
    regular: 'Strict bans on BH, GH, crypto, gambling, nutrition, and sensitive niches.',
    agency: 'Restriction-Friendly Testing Environment. Set up and test ads smoothly—even in sensitive or restricted verticals (BH, WH, GH, Crypto, Casino).',
  },
  {
    title: 'Threshold & Holds',
    regular: 'Threshold & “Hold” Issues. Payment thresholds and sudden holds occur frequently, stopping campaigns without warning.',
    agency: 'Zero hold interruptions. Pre-funded, agency credit line accounts with seamless uninterrupted billing.',
  },
];

export const CORE_FEATURES = [
  {
    id: 'all-product',
    title: 'All Product',
    desc: 'Rent a Facebook ad account with a proven spending history. High trust score ready to scale.',
    icon: 'ShieldCheck',
  },
  {
    id: 'refund',
    title: 'Refund Guarantee',
    desc: 'We will refund remaining balance when you stop using our account. 100% transparency.',
    icon: 'RotateCcw',
  },
  {
    id: 'security',
    title: 'Maximum Security',
    desc: 'Setup account, fanpage, pixel in VPS/ADSPOWER with clean strong proxies to protect your campaigns.',
    icon: 'Lock',
  },
  {
    id: 'unlimited',
    title: 'Unlimited Budget',
    desc: 'Daily spend limit is usually $1,500 or unlimited for best profit and explosive scaling.',
    icon: 'Zap',
  },
  {
    id: 'contract',
    title: '24/7 SLA Contract',
    desc: '24/7 dedicated support. Fix issues within 30 minutes after report in private VIP group.',
    icon: 'Headphones',
  },
  {
    id: 'vat',
    title: 'ZERO % VAT',
    desc: 'Pay 0% VAT tax on Facebook ad spends. Maximize your net ROI compared to standard personal ad accounts.',
    icon: 'Percent',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Test your ads',
    desc: 'We test your ads in our Facebook ad accounts to ensure they work smoothly and bypass moderation without snags.',
  },
  {
    step: '02',
    title: 'Prepare Ads Account & Fanpage',
    desc: 'If your ads work, we prepare accounts, fanpage and pixel in VPS/AdsPower and show you how to inspect and check everything.',
  },
  {
    step: '03',
    title: 'Payment & Handover',
    desc: 'If everything is fine and you want to start, send the payment. Account and fanpage are handed over to you in under 10 minutes.',
  },
];

export const FB_PRICING_TIERS: PricingTier[] = [
  {
    id: 'fb-tier-1',
    name: 'Facebook Agency Tier 1',
    spendRange: 'Spending $1,000 – $2,999 / DAY',
    rate: '6% Charge',
    description: 'Perfect for emerging media buyers and growing campaigns looking for high stability on Facebook.',
    features: [
      'Unlimited daily Facebook ad spend',
      'VPS / AdsPower clean proxy setup',
      'Strong warmed Fanpage & Pixel included',
      '24/7 support via private Telegram group',
      'Issues fixed within 30 minutes',
      'Remaining balance 100% refundable',
      'Zero % VAT tax',
    ],
  },
  {
    id: 'fb-tier-2',
    name: 'Facebook Agency Tier 2',
    spendRange: 'Spending $3,000 – $10,000 / DAY',
    rate: '5% Charge',
    popular: true,
    description: 'Best choice for aggressive performance scaling teams and high-volume media buyers.',
    features: [
      'Everything in Tier 1',
      'Reduced 5% agency fee',
      'Priority Facebook review system',
      'Aged Fanpage kháng limit high trust',
      'Dedicated technical account manager',
      'Instant replacement backup accounts & pages',
      'Support BH, WH, GH, Crypto, Casino',
    ],
  },
  {
    id: 'fb-tier-3',
    name: 'Facebook Enterprise VIP',
    spendRange: 'Spending $10,000+ / DAY',
    rate: 'Negotiable',
    description: 'Custom corporate arrangement for super-affiliates and heavy international Facebook spenders.',
    features: [
      'Lowest negotiable custom fee rate',
      'Dedicated senior Facebook advertising engineer',
      'Multi-BM redundant infrastructure',
      'VIP Fanpages with high interaction history',
      'Direct line escalation support',
      'Custom invoice and volume cashback',
      'VIP referral incentives',
    ],
  },
];

export const FANPAGE_SOLUTIONS = [
  {
    title: 'Strong Aged Fanpages (Fanpage Kháng)',
    rate: 'Included / Customized',
    desc: 'Old aged fanpages with organic interactions, high trust score, verified identity, resilient against Facebook sweeps and policy restrictions.',
    features: [
      'Pre-warmed with authentic engagement history',
      'Resistant to random advertising restrictions',
      'Full administrative access via clean profile & proxy',
      'Instant replacement if flagged by AI moderation',
    ],
  },
  {
    title: 'Verified Pixels & Pre-Warmed Events',
    rate: 'Included with BM',
    desc: 'Clean, verified Facebook Pixels setup directly inside agency Business Managers, pre-warmed for conversion tracking.',
    features: [
      'Accurate conversion tracking & domain verification',
      'Shared seamlessly across agency accounts',
      'Zero pixel-banning cascade issues',
      '24/7 technical pixel monitoring',
    ],
  },
];

export const OTHER_PRICING = [
  {
    title: 'Personal Facebook Accounts',
    rate: '15% Charge',
    desc: 'Flexible individual Facebook advertising accounts with pre-warmed history and fast setup.',
  },
  {
    title: 'Facebook Invoice Accounts',
    rate: '20% Charge',
    desc: 'Top-tier corporate Facebook invoice billing accounts with maximum immunity and Meta BM priority.',
  },
];

export const THRESHOLD_PROGRAM = {
  title: '4% Service Charge & $450 Profit Threshold Program',
  feeRate: '4% Service Fee',
  content:
    '4% Service Fee for all products and give away $450 when the advertising account reaches the final threshold of $900, we will proceed to spend the threshold and not pay FB and we will have a profit of $900 divided by 50:50. I would then send a new account to continue spending and continue on plan once you reach the next $900 threshold. With this form, you can spend freely with a 5% Service Fee, while receiving revenue of $450 for each account reaching the threshold of $900 received.',
  referralNote:
    'In addition, when customers use the service and refer friends, they will receive a discount for both customers and friends. Fees will be reduced if customers spend a lot.',
};

export const FACEBOOK_INFRASTRUCTURE_BENEFITS = [
  {
    title: 'Strong Fanpage & Resistant Assets',
    desc: 'We provide aged, verified Fanpages (Fanpage kháng) pre-warmed with authentic history. Campaigns run smoothly without random page restrictions.',
  },
  {
    title: 'Aged BM & Unlimited Daily Spend',
    desc: 'Facebook Agency Business Managers with unlimited daily budget thresholds, allowing explosive scaling without the usual 25$/50$/250$ personal account limits.',
  },
  {
    title: 'Full VPS / AdsPower + Clean Proxies',
    desc: 'Each account and fanpage is pre-configured in dedicated AdsPower environments with clean residential proxies, eliminating device fingerprinting checkpoints.',
  },
  {
    title: 'Pre-Warmed Conversion Pixels',
    desc: 'Agency-level Pixels already verified with domain setup, optimizing your Facebook machine learning and safeguarding conversion data.',
  },
  {
    title: 'Sensitive Verticals Supported',
    desc: 'Specially structured setups for Black Hat, Grey Hat, White Hat, Crypto, Gambling, Casino, and Weight Loss with rapid ad approvals.',
  },
  {
    title: '30-Minute Replacement Guarantee',
    desc: 'If an account, fanpage, or ad set experiences an issue, our 24/7 engineer team replaces it within 30 minutes with 100% balance migration.',
  },
];

export const COOPERATION_STEPS = [
  {
    num: '1',
    title: 'Account & Page Inspection',
    desc: 'Customers check their Facebook account and Fanpage via VPS, ADSPOWER to verify history and integrity.',
  },
  {
    num: '2',
    title: 'Transfer Budget & Fee',
    desc: 'Transfer spending budget + service fees via Crypto (USDT) or Bank Wire.',
  },
  {
    num: '3',
    title: 'Instant 10-Min Handover',
    desc: 'We give you ready-to-run Facebook accounts and fanpages in 10 minutes with full access credentials.',
  },
  {
    num: '4',
    title: '24/7 VIP Closed Group Support',
    desc: 'Staff support you 24/7 in a private closed group on Telegram for instant campaign resolution.',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Do you provide detailed daily spending reports?',
    answer: 'Yes! We have detailed daily spending reports for you based on your Facebook account’s time zone.',
  },
  {
    question: 'What is the minimum and maximum budget for Facebook Ads?',
    answer: 'Facebook: min $1,000/day – unlimited max. You can scale smoothly to tens of thousands per day without budget caps.',
  },
  {
    question: 'Are Fanpages and Pixels included?',
    answer: 'Yes! We provide aged, resilient Fanpages (Fanpage kháng) and pre-configured Pixels inside VPS/AdsPower, ready for immediate ad launching.',
  },
  {
    question: 'What if I don’t have much time to create and manage campaigns?',
    answer: 'Our technical Facebook support team is always ready to assist or create campaigns according to your exact requirements.',
  },
  {
    question: 'What types of products and niches do you accept on Facebook?',
    answer: 'White hat products, black hat products such as card games, electronic money, crypto/NFT, weight loss, e-commerce, casino, nutra, and more.',
  },
  {
    question: 'What products are strictly prohibited?',
    answer: 'Products against the state, political agitation, weapons, and illegal violence are strictly not accepted.',
  },
  {
    question: 'How fast do you replace disabled or restricted accounts or pages?',
    answer: 'We fix or replace accounts and fanpages within 30 minutes of receiving your report. Any remaining unspent balance is transferred 100% to the new account.',
  },
  {
    question: 'What is your refund policy if I stop running?',
    answer: 'We will refund 100% of your remaining unspent balance whenever you decide to stop using our accounts.',
  },
];

export const ACCEPTED_PAYMENTS = [
  { name: 'USDT (TRC20 / ERC20)', type: 'Crypto', note: 'Instant confirmation' },
  { name: 'Bitcoin / Ethereum', type: 'Crypto', note: 'Global & private' },
  { name: 'International Bank Wire', type: 'Banking', note: 'USD / EUR / VND' },
  { name: 'PayPal / Wise / Payoneer', type: 'Fintech', note: 'Flexible billing' },
];
