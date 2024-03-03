function ImgHome({ link, clase }) {
  console.log(clase);
  return (
    <>
      <img className={clase} src={link} alt="food_img" />
    </>
  );
}

export default ImgHome;
