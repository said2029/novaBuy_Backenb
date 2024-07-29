const mongoose = require("mongoose");

const HomeSetting = mongoose.Schema({
  headerText: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  headerLogoImage: { type: String, default: "" },
  categories: { type: String, default: "" },
  aboutUs: { type: String, default: "" },
  contactUs: { type: String, default: "" },
  offers: { type: String, default: "" },
  faq: { type: String, default: "" },
  privacyPolicy: { type: String, default: "" },
  termsAndConditions: { type: String, default: "" },
  pages: { type: String, default: "" },
  myAccount: { type: String, default: "" },
  login: { type: String, default: "" },
  logout: { type: String, default: "" },
  checkout: { type: String, default: "" },
  sliderHero: [
    {
      sliderImages: { type: String, default: "" },
      sliderTitle: { type: String, default: "" },
      sliderDescription: { type: String, default: "" },
      sliderButtonName: { type: String, default: "" },
      sliderButtonLink: { type: String, default: "" },
    },
  ],
  superDiscountCouponIsActive: { type: String, default: "" },
  superDiscountCouponsCode: [{ type: String, default: "" }],
  superDiscountTitle: { type: String, default: "" },
  promotionBannerIsActive: { type: String, default: "" },
  promotionBannerTitle: { type: String, default: "" },
  promotionBannerDescription: { type: String, default: "" },
  promotionBannerButtonName: { type: String, default: "" },
  promotionBannerButtonLink: { type: String, default: "" },
  popularProductsIsActive: { type: String, default: "" },
  popularProductsDiscriotion: { type: String, default: "" },
  popularProductsTitle: { type: String, default: "" },
  popularProductsProductsLimit: { type: String, default: "" },
  quickDeliveryIsActive: { type: String, default: "" },
  quickDeliverySectionSubTitle: { type: String, default: "" },
  quickDeliverySectionTitle: { type: String, default: "" },
  quickDeliverySectionDescription: { type: String, default: "" },
  quickDeliverySectionButtonName: { type: String, default: "" },
  quickDeliverySectionButtonLink: { type: String, default: "" },
  quickDeliverySectionImage: { type: String, default: "" },
  latestDiscountedProductsIsActive: { type: String, default: "" },
  latestDiscountedProductsTitle: { type: String, default: "" },
  latestDiscountedProductsDescription: { type: String, default: "" },
  latestDiscountedProductsLimit: { type: String, default: "" },
  getYourDailyNeedsIsActive: { type: String, default: "" },
  getYourDailyNeedsTitle: { type: String, default: "" },
  getYourDailyNeedsDescription: { type: String, default: "" },
  getYourDailyNeedsTitleImageLeft: { type: String, default: "" },
  getYourDailyNeedsTitleImageRight: { type: String, default: "" },
  getYourDailyNeedsTitleButton1Image: { type: String, default: "" },
  getYourDailyNeedsTitleButton1Link: { type: String, default: "" },
  getYourDailyNeedsTitleButton2Image: { type: String, default: "" },
  getYourDailyNeedsTitleButton2Link: { type: String, default: "" },
  featurePromoIsActive: { type: String, default: "" },
  featurePromoSectionFreeShipping: { type: String, default: "" },
  featurePromoSectionSupport: { type: String, default: "" },
  featurePromoSectionSecurePayment: { type: String, default: "" },
  featurePromoSectionLatestOffer: { type: String, default: "" },
  footerBlocks: [
    {
      active: { type: String, default: "" },
      title: { type: String, default: "" },
      link1: { type: String, default: "" },
      link2: { type: String, default: "" },
      link3: { type: String, default: "" },
      link4: { type: String, default: "" },
    },
  ],
  footerBlock: {
    active: { type: String, default: "" },
    footerLogo: { type: String, default: "" },
    address: { type: String, default: "" },
    phone: { type: String, default: "" },
    email: { type: String, default: "" },
    socialLinks: {
      active: { type: String, default: "" },
      facebook: { type: String, default: "" },
      twitter: { type: String, default: "" },
      pinterest: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      whatsApp: { type: String, default: "" },
    },
  },
  paymentMethodActive: { type: String, default: "" },
  paymentMethodImage: { type: String, default: "" },
  footerBottomContactActive: { type: String, default: "" },
  footerBottomContactNumber: { type: String, default: "" },
});

const AboutUsSchema = mongoose.Schema({
  pageHeader: {
    enable: { type: Boolean },
    pageHeaderBackground: { type: String },
    pageTitle: { type: String },
  },
  aboutPage: {
    enable: { type: Boolean },
    topTitle: { type: String },
    topDescription: { type: String },
    boxOneTitle: { type: String },
    boxOneSubtitle: { type: String },
    boxOneDescription: { type: String },
    boxTwoTitle: { type: String },
    boxTwoSubtitle: { type: String },
    boxTwoDescription: { type: String },
  },
  pageTopContentRight: {
    enable: { type: Boolean },
    topContentRightImage: { type: String },
  },
  contentSection: {
    enable: { type: Boolean },
    firstParagraph: { type: String },
    secondParagraph: { type: String },
    contentImage: { type: String },
  },
  ourTeam: {
    enableThisBlock: { type: Boolean },
    ourTeamTitle: { type: String },
    ourTeamDescription: { type: String },
    member: [
      {
        ourTeamOneImage: { type: String },
        ourTeamOneTitle: { type: String },
        ourTeamOneSubTitle: { type: String },
      },
    ],
  },
});
const FaqsSchema = mongoose.Schema({
  pageHeader: {
    enable: { type: String },
    pageHeaderBackground: { type: String },
    pageTitle: { type: String },
  },
  leftColumn: {
    enable: { type: String },
    leftImage: { type: String },
  },
  faqs: {
    enable: { type: String },
    faq: [
      {
        faqTitle: { type: String },
        faqDescription: { type: String },
      },
    ],
  },
});
const ContactUsSchema = mongoose.Schema({
  pageHeader: {
    enable: { type: String },
    backgroundImage: { type: String },
    pageTitle: { type: String },
  },
  emailUsBox: {
    enable: { type: String },
    title: { type: String },
    email: { type: String },
    text: { type: String },
  },
  callUsBox: {
    enable: { type: String },
    title: { type: String },
    phone: { type: String },
    text: { type: String },
  },
  addressBox: {
    enable: { type: String },
    title: { type: String },
    address: { type: String },
  },
  middleLeftColumn: {
    enable: { type: String },
    middleLeftImage: { type: String },
  },
  contactForm: {
    enable: { type: String },
    contactFormTitle: { type: String },
    contactFormDescription: { type: String },
  },
});

const CheckoutSchema = mongoose.Schema({
  personalDetails: {
    personalDetails: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    emailAddress: { type: String },
    phone: { type: String },
  },
  shippingDetails: {
    shippingDetails: { type: String },
    streetAddress: { type: String },
    city: { type: String },
    country: { type: String },
    zipPostal: { type: String },
    shippingCost: { type: Number },
    shippingOneName: { type: String },
    shippingOneDescription: { type: String },
    shippingOneCost: { type: Number },
    shippingTwoName: { type: String },
    shippingTwoDescription: { type: String },
    shippingTwoCost: { type: Number },
    paymentMethod: { type: String },
    continueButton: { type: String },
    confirmButton: { type: String },
  },
  cartItemSection: {
    orderSummary: { type: String },
    applyButton: { type: String },
    subTotal: { type: Number },
    discount: { type: Number },
    totalCost: { type: Number },
  },
});

const PrivacyTCSchema = mongoose.Schema({
  privacyPolicy: {
    enable: { type: String },
    background: { type: String },
    title: { type: String },
    pageContent: { type: String },
  },
  termsAndConditions: {
    enable: { type: String },
    background: { type: String },
    title: { type: String },
    pageContent: { type: String },
  },
});

const SEOSchema = mongoose.Schema({
  faviconIcon: { type: String },
  metaTitle: { type: String },
  metaDescription: { type: String },
  metaUrl: { type: String },
  metaKeywords: { type: String },
});
var settingsSchema = mongoose.Schema({
  HomeSetting: { type: HomeSetting },
  AboutUsSchema: { type: AboutUsSchema },
  FaqsSchema: { type: FaqsSchema },
  ContactUsSchema: { type: ContactUsSchema },
  CheckoutSchema: { type: CheckoutSchema },
  PrivacyTCSchema: { type: PrivacyTCSchema },
  PrivacyTCSchema: { type: PrivacyTCSchema },
  SEOSchema: { type: SEOSchema },
});
const store_cu_md =  mongoose.model("store_coutomization", settingsSchema)

module.exports = store_cu_md;
