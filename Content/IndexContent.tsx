import { Categories } from "../helper/types";

const illustrationImageRight: string =
  "https://dcok7u9o4gc10.cloudfront.net/uploads/ckeditor/pictures/2204/content_shutterstock_714225325.jpg";

const illustrationImageLeft: string =
  "https://i.pinimg.com/736x/62/f0/7f/62f07fa3ff0ea730343d093a560e2ca5.jpg";

const titre: string =
  "Noce de coton vous accompagne dans les moments les plus festif de votre vie";

const introduction: string =
  "Nous proposont faire-part, et accessoires décoratif élégant et tendance";

const categoriesIntroduction: {
  image: string;
  title: Categories;
  text: string;
  subtitle: string;
}[] = [
  {
    image:
      "https://www.wedding-spot.com/blog/sites/wsblog/files/styles/webp_desktop/public/images/migrated/273-Bride%2Band%2Bgroom%2Bclose%2Bup%2Bsaying%2Btheir%2Bvows%2Bduring%2Bwedding%2Bceremony.jpg.webp?itok=fecBNiSf",
    title: Categories.FAIRE_PART,
    text: "Invitez vos proche de la plus belle des manière en leurs envoyant d'élégents faire-part personalisable à souhait pour que votre invitation soit unique.",
    subtitle: "Consultez nos faire-part",
  },
  {
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2022/06/safari-baby-shower-theme-ecomm-via-amazon.jpg?fit=700,700",
    title: Categories.COFFRETS,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus nesciunt nam molestias facilis exercitationem recusandae labore !",
    subtitle: "Consultez nos coffrets",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587752889012-a8dc4999e438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&w=1000&q=80",
    title: Categories.PLATEAUX,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis autem nihil repellendus sit! In sapiente odio harum accusamus. Praesentium a doloribus impedit officiis est mollitia.",
    subtitle: "Consultez nos plateaux",
  },
];

const advantagesImage: string =
  "https://i.etsystatic.com/6075796/r/il/d216b1/4174042036/il_fullxfull.4174042036_rtc1.jpg";

const advantages: {
  title: string;
  text: string;
}[] = [
  {
    title: "Qualité",
    text: "Des produits de qualité  selectionné avec soins",
  },
  {
    title: "Prix",
    text: "Un rapport qualité/prix exceptionnel de part la proximité avec nos fournisseurs",
  },
  {
    title: "Service",
    text: "Votre satisfaction nous est indispensable, c'est pourquoi nous sommes présents pour vous conseiller et à votre écoute en cas du moindre imprévu.",
  },
];

const questionsAnswers: {
  question: string;
  answer: string;
}[] = [
  {
    question: "Comment se passe une commande ?",
    answer:
      "Vous pouvez choisir vos produits sur notre site et nous vous contacterons par téléphone après votre commande pour définir ensemble de la personalisation que vous souhaitez. Vous pouvez également nous contactez sur notre instagram pour nous poser toutes questions nécessaire avant de passer commande, nous répondant rapidement à vos intérogations.",
  },
  {
    question: "Quels sont nos délais de livraison ?",
    answer:
      "Après la commande passé et la personalisation du produits validé, comptez 3 semaines pour le recevoir chez vous",
  },
  {
    question: "Si je ne suis pas satisfait du produit ?",
    answer:
      "Nous validons avec vous le produit avant de lancer sa fabriquation, si le produit n'est pas conforme nous vous remboursont, s'il est conforme mais que vous vous rétracté après la production démarrer aucun remboursement n'est possible.",
  },
];

const instagramTitle: string = "Suivez-nous sur Instagram @Noces_de_Coton";

const INSTAGRAM_LINK = "https://www.instagram.com/noces_de_coton/";

const instagramImages = [
  "images/insta1.jpg",
  "images/insta2.jpg",
  "images/insta3.jpg",
  "images/insta4.jpg",
];

const IndexContent = {
  illustrationImageRight,
  illustrationImageLeft,
  titre,
  introduction,
  categoriesIntroduction,
  advantagesImage,
  advantages,
  questionsAnswers,
  instagramTitle,
  INSTAGRAM_LINK,
  instagramImages,
};

export default IndexContent;
