import FaqList from "./faq-list";

/* eslint-disable react/no-unescaped-entities */
const FaqSection = () => {

  const faqs = [
    {
      question: "Apa itu Togetherboost?",
      answer: "Togetherboost adalah sebuah platform yang mempertemukan antara donatur dan penerima donasi. Seorang donatur dapat memberikan donasi kepada siapa saja yang membutuhkan. Seorang donatur dapat memilih penerima donasi berdasarkan beberapa persyaratan yang telah ditentukan oleh donatur. Secara garis besar, konsep dari Togetherboost mirip seperti giveaway, namun dengan tujuan yang lebih baik."
    },
    {
      question: "Bagaimana cara melakukan donasi?",
      answer: 'Silahkan login terlebih dahulu. Ketika sudah memasuki halaman utama, anda dapat melihat tombol "Buat Donasi". Anda dapat mengklik tombol tersebut untuk membuat donasi. Silahkan isi form yang tersedia, dan klik tombol "Post Donasi" untuk menyelesaikan proses pembuatan donasi.'
    },
    {
      question: "Apa saja yang dapat saya donasikan?",
      answer: "Anda dapat melakukan donasi berupa uang, barang, ataupun properti digital yang dapat berguna bagi penerima donasi dalam hal pendidikan dan pengembangan diri. Hal yang dapat anda donasikan antara lain buku bacaan, dana untuk membeli online course, dan lain-lain."
    },
    {
      question: "Bagaimana cara saya menerima donasi?",
      answer: 'Silahkan login terlebih dahulu. Ketika sudah memasuki halaman utama, anda dapat melihat beberapa postingan donasi. Silahkan buka dan ikuti persyaratan yang ada.'
    },
    {
      question: "Bagaimana cara saya memilih penerima donasi?",
      answer: 'Sebagai donatur anda dapat bebas mengatur persyaratan apa saja yang harus dipenuhi oleh penerima donasi. Silahkan buka tautan ini untuk referensi: https://forms.gle/AM1GREAJHr5aEUTB8'
    }
  ]

  const renderFaqList = faqs.map((faq, index) => <FaqList key={index} question={faq.question} answer={faq.answer}/>);

  return (
    <div className="flow-root">
      <div className="-my-8 divide-y divide-gray-100">
        {renderFaqList}
      </div>
    </div>
  );
};

export default FaqSection;
