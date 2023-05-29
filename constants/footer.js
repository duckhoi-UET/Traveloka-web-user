export const FOOTER = {
  BECOME_SUPPLIER: "becomeSupplier",
  BLOG: "blog",
  WEBNESDAY: "wednesday",
  COMPLAINT_POLICY: "complaintPolicy",
  DELIVERY_AND_PAYMENT_POLICY: "deliveryAndPaymentPolicy",
  EARNING: "earning",
  FAQ: "faq",
  FEED_BACK: "feedback",
  PRIVACY_POLICY: "privacyPolicy",
  RETAILER_COMMUNITY: "retailerCommunity",
  RETURN_POLICY: "returnPolicy",
  SELLER_COMMUNITY: "sellerCommunity",
  SUPPORT_CENTER: "supportCenter",
  TRANSACTION_POLICY: "transactionPolicy",
  YOUTOBE_CHANNEL: "youtubeChannel",
  ABOUT: "about",
};

export const FOOER_OPTIONS = [
  {
    title: "About us",
    links: [
      {
        label: "Introduce ",
        value: "/about",
      },
      {
        label: "General trading policy",
        value: FOOTER.TRANSACTION_POLICY,
      },
      {
        label: "Check-out policy",
        value: FOOTER.RETURN_POLICY,
      },
      {
        label: "Privacy Policy",
        value: FOOTER.PRIVACY_POLICY,
      },

      {
        label: "Complaint handling policy",
        value: FOOTER.COMPLAINT_POLICY,
      },
    ],
  },
  {
    title: "Information guide us",
    links: [
      {
        label: "Blog ",
        value: FOOTER.BLOG,
      },
      {
        label: "Make money with",
        value: FOOTER.EARNING,
      },
      {
        label: "Frequently asked questions",
        value: FOOTER.FAQ,
      },
      {
        label: "Support center",
        value: FOOTER.SUPPORT_CENTER,
      },
    ],
  },
];

