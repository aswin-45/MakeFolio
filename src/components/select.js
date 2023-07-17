import React from 'react';
import { TextField, Grid, Button, IconButton } from '@material-ui/core';
import { AddCircleOutline, DeleteOutline } from '@material-ui/icons';
import MainNav from './mainNav';
// import Navbar from './Navbar';
// import './PortfolioForm.css'; // Import custom CSS file for styling

const PortfolioForm = () => {
  const [projects, setProjects] = React.useState([{ title: '', description: '', role: '', tools: '' }]);
  const [references, setReferences] = React.useState([{ name: '', position: '', contact: '' }]);

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleReferenceChange = (index, field, value) => {
    const updatedReferences = [...references];
    updatedReferences[index][field] = value;
    setReferences(updatedReferences);
  };

  const handleAddProject = () => {
    setProjects([...projects, { title: '', description: '', role: '', tools: '' }]);
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleAddReference = () => {
    setReferences([...references, { name: '', position: '', contact: '' }]);
  };

  const handleRemoveReference = (index) => {
    const updatedReferences = [...references];
    updatedReferences.splice(index, 1);
    setReferences(updatedReferences);
  };

  return (
    <div className="portfolio-form" style={{ backgroundColor: '#fef9f966' }}>
      <MainNav />
      <form>
        <Grid container spacing={3} justify="center" alignItems="center">
          {/* Personal Information */}
          <Grid item xs={12} sm={4}>
            <TextField label="Full Name" fullWidth required color="white" InputProps={{ style: { color: 'white' } }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Email" fullWidth required type="email" color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Phone Number" fullWidth required type="tel" color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Address" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Website" fullWidth color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>

          {/* Objective */}
          <Grid item xs={12}>
            <TextField label="Objective" fullWidth multiline rows={3} required color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>

          {/* Education */}
          <Grid item xs={12} sm={4}>
            <TextField label="Degree/Certification" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Institution/University" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Year of Graduation" fullWidth required type="number" color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Relevant Courses or Specializations" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>

          {/* Work Experience */}
          <Grid item xs={12}>
            <TextField label="Work Experience" fullWidth multiline rows={3} required color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>

          {/* Skills */}
          <Grid item xs={12} sm={4}>
            <TextField label="Technical Skills" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Soft Skills" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>

          {/* Projects */}
          <Grid item xs={12}>
            <h4>Projects</h4>
            {projects.map((project, index) => (
              <div key={index}>
                <TextField
                  label="Project Title"
                  fullWidth
                  required
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                  color="secondary"
                  InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={3}
                  required
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                  color="secondary"
                  InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                  label="Role/Contribution"
                  fullWidth
                  required
                  value={project.role}
                  onChange={(e) => handleProjectChange(index, 'role', e.target.value)}
                  color="secondary"
                  InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                  label="Technologies/Tools Used"
                  fullWidth
                  required
                  value={project.tools}
                  onChange={(e) => handleProjectChange(index, 'tools', e.target.value)}
                  color="secondary"
                  InputProps={{ style: { color: 'white' } }}
                />
                {index !== 0 && (
                  <IconButton onClick={() => handleRemoveProject(index)}>
                    <DeleteOutline />
                  </IconButton>
                )}
              </div>
            ))}
            <IconButton onClick={handleAddProject}>
              <AddCircleOutline />
            </IconButton>
          </Grid>

          {/* Certifications/Awards */}
          <Grid item xs={12} sm={4}>
            <TextField label="Certification/Award Title" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Issuing Organization" fullWidth required color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Year Obtained" fullWidth required type="number" color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>

          {/* References */}
          <Grid item xs={12}>
            <h4>References</h4>
            {references.map((reference, index) => (
              <div key={index}>
                <TextField
                  label="Name"
                  fullWidth
                  required
                  value={reference.name}
                  onChange={(e) => handleReferenceChange(index, 'name', e.target.value)}
                  color="secondary"
                  InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                  label="Position"
                  fullWidth
                  required
                  value={reference.position}
                  onChange={(e) => handleReferenceChange(index, 'position', e.target.value)}
                  color="secondary"
                  InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                  label="Contact Information"
                  fullWidth
                  required
                  value={reference.contact}
                  onChange={(e) => handleReferenceChange(index, 'contact', e.target.value)}
                  color="secondary"
                  InputProps={{ style: { color: 'white' } }}
                />
                {index !== 0 && (
                  <IconButton onClick={() => handleRemoveReference(index)}>
                    <DeleteOutline />
                  </IconButton>
                )}
              </div>
            ))}
            <IconButton onClick={handleAddReference}>
              <AddCircleOutline />
            </IconButton>
          </Grid>

          {/* Additional Information */}
          <Grid item xs={12}>
            <TextField label="Additional Information" fullWidth multiline rows={3} color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={4}>
            <TextField label="LinkedIn Profile URL" fullWidth color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="GitHub Profile URL" fullWidth color="secondary" InputProps={{ style: { color: 'white' } }} />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PortfolioForm;