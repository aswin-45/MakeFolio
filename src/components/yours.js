import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MainNav } from "./NavBar";
import './yours.css';

const Yours = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    project: "",
    technologies: "",
    description: "",
    projectUrl: "",
    skills: "",
    college: "",
    cgpa: "",
   
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("You need to log in to perform this action.");
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:8080/api/v1/demo/addcontacts",
        
        formData,
        config
      );
       navigate("/get");
      console.log(response.data);
      setFormData({
        name: "",
        phoneNo: "",
        email: "",
        project: "",
        technologies: "",
        description: "",
        projectUrl: "",
        skills: "",
        college: "",
        cgpa: "",
       
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <MainNav/>
      <div className="imgs">
        <div>
          {/* <div></div> */}
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text1"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email1"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Project</label>
                <input
                  type="text1"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Technologies</label>
                <input
                  type="text1"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text1"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>ProjectUrl</label>
                <input
                  type="text1"
                  name="projectUrl"
                  value={formData.projectUrl}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Skills</label>
                <input
                  type="text1"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>College</label>
                <input
                  type="text1"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>CGPA</label>
                <input
                  type="text1"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  required
                />
              </div>

              
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Yours;