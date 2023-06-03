import '../css/imageGallery.css';
import img1 from "../image1.jpg";
import img2 from "../image2.jpg";
import img3 from "../image3.jpg";

const PoliceStations = () => {
  const images = [
    {
      src: img1,
      heading: "Bhokardan",
      contact: "02485-244210",
      description: 'Police department is responsible to maintain the Law & Order in the district. From the administrative point of view, district is divided in to four Police Sub-divisions,1)SDPO, Jalna 2)SDPO Bhokardan 3)SDPO Ambad 4)SDPO Partur ',
    },
    {
      src: img2,
      heading: "Hasnabad",
      contact: "02485-244210",
      description: 'Police department is responsible to maintain the Law & Order in the district. From the administrative point of view, district is divided in to four Police Sub-divisions,1)SDPO, Jalna 2)SDPO Bhokardan 3)SDPO Ambad 4)SDPO Partur ',
    },
    {
      src: img3,
      heading: "Paradh",
      contact: "02485-244210",
      description: 'Police department is responsible to maintain the Law & Order in the district. From the administrative point of view, district is divided in to four Police Sub-divisions,1)SDPO, Jalna 2)SDPO Bhokardan 3)SDPO Ambad 4)SDPO Partur ',    },
  ];
    return(
        <div className="image-gallery">
        {images.map((image, index) => (
          <div className="image-container" key={index}>
            <img src={image.src} alt={image.heading} />
            <div className="image-content">
              <h5 className="image-heading"><center>{image.heading}</center></h5>
              <p className="image-description text-muted">{image.description}</p>
              <p className="image-contact text-muted"><center>Contact:&nbsp;{image.contact}</center></p>
            </div>
          </div>
        ))}
      </div>
    )
}
export default PoliceStations;