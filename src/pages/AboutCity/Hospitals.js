import '../css/imageGallery.css';
import img1 from "../image1.jpg";
import img2 from "../image2.jpg";
import img3 from "../image3.jpg";

const Hospitals = () => {
  const images = [
    {
      src: img1,
      heading: "Sanjivani Hospital",
      contact: "02485 248160",
      description: 'First-time travelers to India would likely end up in its capital, New Delhi. The flamboyant lifestyle of this city is likely to derail tourists from sticking to their itinerary',
    },
    {
      src: img2,
      heading: "Rajpiut Hosipital",
      contact: "02485 223662",
      description: 'Many of the world’s architectures can be attributed to love and the Taj Mahal is one of them. Mumtaz Mahal’s last request from her husband, Shah Jahan, before she died after the delivery of her 14th child, was to have a mausoleum built in her name.',
    },
    {
      src: img3,
      heading: "Saikh Hospital",
      contact: "02485 244961",
      description: 'Havelock Island is the largest of its kind in Ritchie’s Archipelago. It makes the perfect location for eco-tourism. Havelock Island now sees more visitors because of its great beaches, snorkeling, scuba diving opportunities and casual atmosphere.',
    },
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
export default Hospitals;