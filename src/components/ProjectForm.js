import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Typography, Chip, Stack } from '@mui/material';
import axiosInstance from '../config/axiosInstance'; // Assuming you have an axios instance set up

const ProjectForm = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    image: '',
    description: '',
    technologies: [],
    link: '',
  });
  const [technologyInput, setTechnologyInput] = useState('');

  // Fetch existing projects from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get('/projects'); // Adjust if necessary
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  // Handle input changes for the new project
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  // Handle adding a technology
  const handleAddTechnology = () => {
    if (technologyInput && !newProject.technologies.includes(technologyInput)) {
      setNewProject((prev) => ({
        ...prev,
        technologies: [...prev.technologies, technologyInput],
      }));
      setTechnologyInput(''); // Clear the input field
    }
  };

  // Handle form submission to save the new project
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/projects', newProject);
      setProjects([...projects, response.data]); // Add the new project to the state
      setNewProject({
        title: '',
        image: '',
        description: '',
        technologies: [],
        link: '',
      }); // Reset form fields
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Project Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Project Title"
          name="title"
          value={newProject.title}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Image URL"
          name="image"
          value={newProject.image}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          name="description"
          value={newProject.description}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <TextField
            label="Technology"
            value={technologyInput}
            onChange={(e) => setTechnologyInput(e.target.value)}
            fullWidth
          />
          <Button variant="outlined" onClick={handleAddTechnology}>
            Add
          </Button>
        </Stack>
        <Box sx={{ mb: 2 }}>
          {newProject.technologies.map((tech, index) => (
            <Chip key={index} label={tech} sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
        <TextField
          label="Project Link"
          name="link"
          value={newProject.link}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Save Project
        </Button>
      </form>

      {/* Displaying existing projects */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Existing Projects</Typography>
        {projects.map((project) => (
          <Box key={project._id} sx={{ p: 2, border: '1px solid #ccc', borderRadius: '4px', mb: 2 }}>
            <Typography variant="h6">{project.title}</Typography>
            <img src={project.image} alt={project.title} style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="body1">{project.description}</Typography>
            <Typography variant="body2">Technologies: {project.technologies.join(', ')}</Typography>
            <Typography variant="body2">Link: <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectForm;
