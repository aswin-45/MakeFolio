import React from 'react';
import { Link } from 'react-router-dom';
import t1 from '../images/t11.jpeg';
import t2 from '../images/dislike.png';
import t3 from '../images/like.png';
import { Add, AddCircle } from '@mui/icons-material';
import ProfilePage from './profile';
import { Button } from 'reactstrap';

const Template = () => {
  const templates = [
    {
      id: 1,
      name: 'Basic',
      description: 'A modern and clean template with a minimalist design.',
      image: t1,
    },
    {
      id: 2,
      name: 'Simple',
      description: 'A creative and colorful template to showcase your work.',
      image:  t1,
    },
    {
      id: 3,
      name: 'Pro',
      description: 'A professional and elegant template for a sophisticated portfolio.',
      image: t1,
    },
    {
      id: 4,
      name: 'Template 4',
      description: 'A bold and dynamic template to make your portfolio stand out.',
      image: t1,
    },
    {
      id: 5,
      name: 'Template 5',
      description: 'A clean and minimalist template with a focus on typography.',
      image:  t1,
    },
    {
      id: 6,
      name: 'Template 6',
      description: 'An artistic and visually appealing template for creative portfolios.',
      image: t1,
    },
    {
      id: 7,
      name: 'Template 7',
      description: 'A sleek and professional template for showcasing your skills.',
      image: t1,
    },
    {
      id: 8,
      name: 'Template 8',
      description: 'A vibrant and modern template with a playful design.',
      image: t1,
    },
    {
      id: 9,
      name: 'Template 9',
      description: 'An elegant and minimalist template for a refined portfolio.',
      image: t1,
    },
    {
      id: 10,
      name: 'Template 10',
      description: 'A clean and professional template with a focus on content.',
      image: t1,
    },
    {
        id: 11,
        name: 'Template 11',
        description: 'A clean and minimalist template with a focus on typography.',
        image: t1,
    },
    {
        id: 12,
        name: 'Template 12',
        description: 'A bold and dynamic template to make your portfolio stand out.',
        image: t1,
    }

  ];

  function handleLike(){

  const image = document.getElementById('myImage');

  image.addEventListener('click', function() {
  if (image.src.includes('dislike.png')) {
    image.src = '../images/like.png';
  } else {
    image.src = {t2};
  }
});


  };

  return (
    <div className="create-portfolio">
      <div className="create-portfolio-header">
        <AddCircle onClick={<ProfilePage/>}/>
        <h1 className="create-portfolio-title">Create Your Portfolio</h1>
        <p className="create-portfolio-description">Choose a template and start building your professional portfolio.</p>
      </div>
      <div className="create-portfolio-templates">
        {templates.map((template) => (
          <div className="create-portfolio-template" key={template.id}>
            <div className="template-image">
              <img src={template.image} alt={template.name} />
            </div>
            <div className="template-details">
              <h2 className="template-name">{template.name}</h2>
              <p className="template-description">{template.description}</p>
              {/* <Link to={`/template/${template.id}`} className="temp">Select Template</Link> */}
              {/* <Link to={'/select'} className="temp">Select Template</Link> */}
              <Button><Link to="/select">Select Template</Link></Button>
              <img className="img-dislike" id="myImage" src={t2} onClick={handleLike}></img>
            </div>
          </div>
        ))}
      </div>
      <footer className="homepage-footer">
        <p>© 2023 Portfolio Builder. All rights reserved.</p><br/>
        <p>Contact : PortFolio Builder Owner MakeFolio.pvt.Ltd . CopyRight Ensured</p>
      </footer>
    </div>
  );
};

export default Template;