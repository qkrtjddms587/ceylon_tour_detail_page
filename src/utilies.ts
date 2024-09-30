import img0 from "./images/img_bali.jpg";
import img1 from "./images/img_maldives.jpg";
import img2 from "./images/img_cancun.jpg";
import img3 from "./images/img_phuket.jpg";
import img4 from "./images/img_mauritius.jpg";
import img5 from "./images/img_aus.jpg";
import img6 from "./images/img_hawaii.jpg";
import img7 from "./images/img_nhatrang.jpg";
import img8 from "./images/img_dubai.jpg";
import img9 from "./images/img_guam.jpg";
import baliMainBg from "./images/tour/bali/main_bg.jpg";
import item1 from "./images/resort/hotel_01.png";
import item2 from "./images/resort/hotel_02.png";
import item3 from "./images/resort/hotel_03.png";
import item4 from "./images/resort/hotel_04.png";
import item5 from "./images/resort/hotel_05.png";
import item6 from "./images/resort/hotel_06.png";
import item7 from "./images/resort/hotel_07.png";
import item8 from "./images/resort/hotel_08.png";
import infoImg0 from "./images/hotel/0/detail-0.jpg";
import infoImg1 from "./images/hotel/0/detail-1.jpg";
import infoImg2 from "./images/hotel/0/detail-2.jpg";
import saintMainImage from "./images/hotel/0/main-bg-0.jpg";
import packageThumbnailImage0 from "./images/hotel/0/package-0.jpg";
import packageThumbnailImage1 from "./images/hotel/0/package-1.jpg";

export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export const formatKrDate = (date: string) => {
  const dateParts = date.split("-");
  if (dateParts.length !== 3) {
    throw new Error("Invalid date format. Expected format: YYYY-MM-DD");
  }
  const year = dateParts[0];
  const month = +dateParts[1];
  const day = +dateParts[2];
  return `${year}년 ${month}월 ${day}일`;
};
