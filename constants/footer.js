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
    title: "Giới thiệu ",
    links: [
      {
        label: "Về chúng tôi",
        value: "/about",
      },
      {
        label: "Chính sách giao dịch chung",
        value: FOOTER.TRANSACTION_POLICY,
      },
      {
        label: "Chính sách trả phòng",
        value: FOOTER.RETURN_POLICY,
      },
      {
        label: "Chính sách bảo mật",
        value: FOOTER.PRIVACY_POLICY,
      },

      {
        label: "Chính sách giải quyết khiếu nại",
        value: FOOTER.COMPLAINT_POLICY,
      },
    ],
  },
  {
    title: "Thông tin hướng dẫn",
    links: [
      {
        label: "Blog ",
        value: FOOTER.BLOG,
      },
      {
        label: "Kiếm tiền cùng ",
        value: FOOTER.EARNING,
      },
      {
        label: "Câu hỏi thường gặp",
        value: FOOTER.FAQ,
      },
      {
        label: "Trung tâm hỗ trợ",
        value: FOOTER.SUPPORT_CENTER,
      },
    ],
  },
];

