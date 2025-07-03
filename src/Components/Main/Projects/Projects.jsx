import { Carousel, Card } from "antd";
import "antd/dist/reset.css";

const projectImages = [
  {
    src: "/taylorsFloor/project (1).jpg",
    title: "Modern Living Room",
    description:
      "Engineered hardwood flooring installation in a modern living room.",
  },
  {
    src: "/taylorsFloor/project (2).jpg",
    title: "Classic Kitchen",
    description: "Luxury vinyl plank flooring for a classic kitchen remodel.",
  },
  {
    src: "/taylorsFloor/project (3).jpg",
    title: "Cozy Bedroom",
    description: "Carpet installation in a cozy bedroom setting.",
  },
  {
    src: "/taylorsFloor/project (4).jpg",
    title: "Office Space",
    description: "Commercial laminate flooring for an office space.",
  },
  {
    src: "/taylorsFloor/project (5).jpg",
    title: "Elegant Hallway",
    description: "Refinished hardwood floors in an elegant hallway.",
  },
  {
    src: "/taylorsFloor/project (6).jpg",
    title: "Family Room",
    description: "Waterproof vinyl flooring in a busy family room.",
  },
  {
    src: "/taylorsFloor/project (7).jpg",
    title: "Luxury Bathroom",
    description: "Tile flooring installation in a luxury bathroom.",
  },
  {
    src: "/taylorsFloor/project (8).jpg",
    title: "Dining Area",
    description: "Engineered wood flooring in a stylish dining area.",
  },
  {
    src: "/taylorsFloor/project (9).jpg",
    title: "Retail Store",
    description: "Durable laminate flooring for a retail environment.",
  },
  {
    src: "/taylorsFloor/project (10).jpg",
    title: "Entryway",
    description: "Stone tile flooring in a welcoming entryway.",
  },
  {
    src: "/taylorsFloor/project (11).jpg",
    title: "Kids Playroom",
    description: "Soft carpet tiles for a safe kids playroom.",
  },
  {
    src: "/taylorsFloor/project (12).jpg",
    title: "Master Bedroom",
    description: "Plush carpet installation in a master bedroom.",
  },
  {
    src: "/taylorsFloor/project (13).jpg",
    title: "Basement Remodel",
    description: "Moisture-resistant vinyl plank flooring in a basement.",
  },
  {
    src: "/taylorsFloor/project (14).jpg",
    title: "Sunroom",
    description: "Natural bamboo flooring in a bright sunroom.",
  },
  {
    src: "/taylorsFloor/project (15).jpg",
    title: "Conference Room",
    description: "Commercial carpet tiles in a conference room.",
  },
  {
    src: "/taylorsFloor/project (16).jpg",
    title: "Home Gym",
    description: "Rubber flooring for a home gym setup.",
  },
  {
    src: "/taylorsFloor/project (17).jpg",
    title: "Staircase",
    description: "Hardwood stair treads and risers installation.",
  },
  {
    src: "/taylorsFloor/project (18).jpg",
    title: "Laundry Room",
    description: "Waterproof tile flooring in a laundry room.",
  },
  {
    src: "/taylorsFloor/project (19).jpg",
    title: "Studio Apartment",
    description: "Laminate flooring in a modern studio apartment.",
  },
  {
    src: "/taylorsFloor/project (20).jpg",
    title: "Reception Area",
    description: "Luxury vinyl tile in a business reception area.",
  },
  {
    src: "/taylorsFloor/project (21).jpg",
    title: "Walk-in Closet",
    description: "Engineered wood flooring in a walk-in closet.",
  },
  {
    src: "/taylorsFloor/project (22).jpg",
    title: "Outdoor Patio",
    description: "Weather-resistant tile for an outdoor patio.",
  },
  {
    src: "/taylorsFloor/project (23).jpg",
    title: "Guest Bedroom",
    description: "Soft carpet installation in a guest bedroom.",
  },
  {
    src: "/taylorsFloor/project (24).jpg",
    title: "Showroom",
    description: "Polished concrete flooring in a showroom.",
  },
  {
    src: "/taylorsFloor/project (25).jpg",
    title: "Cottage Kitchen",
    description: "Rustic wood flooring in a cottage kitchen.",
  },
  {
    src: "/taylorsFloor/project (26).jpg",
    title: "Media Room",
    description: "Sound-absorbing carpet in a media room.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{ maxWidth: 600, margin: "0 auto", padding: 24, marginTop: 50 }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>
        Recently Completed Flooring Projects
      </h2>
      <Carousel className="project-carousel" autoplay>
        {projectImages.map((project, idx) => (
          <div key={idx}>
            <Card
              hoverable
              cover={
                <img
                  alt={project.title}
                  src={project.src}
                  style={{ height: 500, objectFit: "cover" }}
                />
              }
              //   style={{ width: "100%" }}
            >
              <Card.Meta title={""} description={""} />
            </Card>
          </div>
        ))}
      </Carousel>

      <div style={{ marginTop: 50 }}>
        <h3
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            marginBottom: "24px",
          }}
        >
          Video Gallery
        </h3>
        <div className="">
          <h4
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              marginBottom: "24px",
            }}
          >
            Before
          </h4>
          <div className="videos-frame">
            <iframe
              width="478"
              height="600"
              src="https://www.youtube.com/embed/sYQDZcauZ6c"
              title="Taylors Floors Flooring"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="478"
              height="600"
              src="https://www.youtube.com/embed/mTxqa4PU6sc"
              title="Taylors floors"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div style={{ marginTop: 50 }}>
          <h4
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              marginBottom: "24px",
            }}
          >
            After
          </h4>
          <div className="videos-frame">
            <iframe
              width="478"
              height="600"
              src="https://www.youtube.com/embed/SBc5pfSW9fA"
              title="afterVideo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="478"
              height="600"
              src="https://www.youtube.com/embed/-pXgsiOqY8M"
              title="afterVideo2"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
