import Image from "next/image";

import styles from "./Banner.module.scss";

const Banner = ({content}) => {

  return (
    <section className={`${styles.bannerContainer} p-5`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>
              <span className="txt-highlight font-weight-bold">{content?.Hi}</span>
            </h2>
            <button className="btn btn-info btn-lg mt-2 mr-auto">
              Get Quote
            </button>
          </div>
          <div className="col-lg-6">
            <Image
              loader={phLoader}
              src="/13666x450" 
              height={528}
              width={1055}
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const phLoader = ({ src }) => {
  return `https://place-hold.it/${src}`;
};

export default Banner;
