import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const projects = [
    {
      category: "Hydrology",
      title: "Shimla Watershed Study",
      location: "Shimla, HP",
      year: "2023-2024",
      description:
        "Comprehensive 40-year rainfall analysis, return period calculations, and flood mitigation planning for urban catchments.",
      image:
        "https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    },
    {
      category: "Infrastructure",
      title: "Himalayan Barrage Design",
      location: "Uttarakhand",
      year: "2022-2023",
      description:
        "Engineering consultancy for sustainable water retention structures in challenging high-altitude terrain.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    },
    {
      category: "Infrastructure",
      title: "Urban Drainage Planning",
      location: "Himachal Pradesh",
      year: "2024 (Ongoing)",
      description:
        "Stormwater network design and flood alleviation strategy development for hill towns.",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      category: "GIS Solutions",
      title: "Flood Risk Mapping",
      location: "Himachal Pradesh",
      year: "2023",
      description:
        "Comprehensive flood risk assessment and mapping for vulnerable regions using advanced GIS technology.",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      category: "Hydrology",
      title: "Hydropower Assessment",
      location: "Uttarakhand",
      year: "2022",
      description:
        "Feasibility study and environmental impact assessment for micro-hydropower projects in mountainous regions.",
      image:
        "https://images.unsplash.com/photo-1545147980-7a376a8d98a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      category: "Environment",
      title: "Environmental Impact Study",
      location: "Jammu & Kashmir",
      year: "2023",
      description:
        "Comprehensive environmental impact assessment for a major infrastructure project in sensitive ecosystems.",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const filters = [
    "All Projects",
    "Hydrology",
    "Environment",
    "Infrastructure",
    "GIS Solutions",
  ];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-page">
      <section className="banner">
        <div className="banner-content">
          <h1 data-aos="fade-up">Our Engineering Projects</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Showcasing innovative solutions for resilient infrastructure and
            sustainable development
          </p>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <h2 data-aos="fade-up">Featured Projects</h2>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            A portfolio of our work across hydrology, environment, and
            infrastructure
          </p>

          <div
            className="project-filters"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-3">
            {filteredProjects.map((project, index) => (
              <div
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={150 + (index % 3) * 100}
                key={index}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <div className="project-meta">
                    <span>
                      <i className="fas fa-map-marker-alt"></i>{" "}
                      {project.location}
                    </span>
                    <span>
                      <i className="fas fa-calendar-alt"></i> {project.year}
                    </span>
                  </div>
                  <p>{project.description}</p>
                  <a href="#" className="btn-sm">
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{ textAlign: "center", marginTop: "40px" }}
            data-aos="fade-up"
          >
            <a href="#" className="btn">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <h2 data-aos="fade-up">Project Impact</h2>
          <div className="stats-grid">
            <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-number">15+</div>
              <div className="stat-label">States Served</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-number">40k+</div>
              <div className="stat-label">People Impacted</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <h2 data-aos="fade-up">Client Testimonials</h2>
          <div className="testimonial-card" data-aos="fade-up">
            <p className="testimonial-text">
              "NK Divyanshu delivered precise hydrological analysis that
              fundamentally shaped our regional master plan. Their expertise in
              mountain hydrology is unmatched, and their commitment to
              sustainable solutions is evident in every project."
            </p>
            <div className="testimonial-author">
              <div className="author-image">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Client"
                />
              </div>
              <div className="author-info">
                <h4>Suresh Kumar</h4>
                <p>Director, Sri Ganganagar Development Authority</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
