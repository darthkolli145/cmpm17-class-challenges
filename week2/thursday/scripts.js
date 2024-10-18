document.addEventListener('DOMContentLoaded', function() {
    const colors = ['#d1ecf1', '#f8d7da', '#d4edda', '#fce8b2', '#cce5ff', '#f5c6cb', '#c3e6cb', '#ffeeba'];
    let currentColorIndex = 0;

    function changeBackgroundColor() {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    changeBackgroundColor();
    setInterval(changeBackgroundColor, 3000);

    function setActiveButton(button) {
        let buttons = document.querySelectorAll('.nav button');
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    document.getElementById('about-btn').addEventListener('click', function() {
        setActiveButton(this);
        let aboutSection = document.querySelector('.about');
        if (aboutSection.style.opacity === '0' || aboutSection.style.opacity === '') {
            aboutSection.style.opacity = '1';
            aboutSection.textContent = 'About section: Welcome to my portfolio!';
        } else {
            aboutSection.style.opacity = '0';
        }
    });

    document.getElementById('projects-btn').addEventListener('click', function() {
        setActiveButton(this);
        let aboutSection = document.querySelector('.about');
        aboutSection.style.opacity = '1';
        aboutSection.textContent = 'Projects section: Here are some of my cool projects!';

        const newProject = document.createElement('div');
        newProject.textContent = 'Project ' + (document.querySelectorAll('.projects-list .project-item').length + 1);
        newProject.classList.add('project-item');
        document.querySelector('.projects-list').appendChild(newProject);

        const newSocialMedia = document.createElement('li');
        newSocialMedia.textContent = 'Twitter';
        newSocialMedia.style.cursor = 'pointer';
        newSocialMedia.id = 'twitter';
        newSocialMedia.addEventListener('click', function() {
            window.open('https://www.twitter.com', '_blank');
        });
        document.querySelector('.social-media ul').appendChild(newSocialMedia);

        addSocialMediaHoverEffect(newSocialMedia);
    });

    document.getElementById('resume-btn').addEventListener('click', function() {
        setActiveButton(this);
        let resumeBtn = document.getElementById('resume-btn');
        resumeBtn.style.display = resumeBtn.style.display === 'none' ? 'block' : 'none';

        let aboutSection = document.querySelector('.about');
        aboutSection.style.opacity = '1';
        aboutSection.textContent = 'Resume section: Check out my experience!';

        setTimeout(() => {
            resumeBtn.style.display = 'none';
        }, 5000);
    });

    setTimeout(function() {
        document.getElementById('message-btn').classList.add('flash');
    }, 3000);

    document.getElementById('message-btn').addEventListener('click', function() {
        this.classList.remove('flash');
        this.textContent = 'Thank You!';
        alert('Thanks for clicking!');
    });

    document.getElementById('linkedin').addEventListener('click', function() {
        window.open("https://www.linkedin.com", "_blank");
    });
    document.getElementById('github').addEventListener('click', function() {
        window.open("https://www.github.com", "_blank");
    });
    document.getElementById('facebook').addEventListener('click', function() {
        window.open("https://www.facebook.com", "_blank");
    });
    document.getElementById('instagram').addEventListener('click', function() {
        window.open("https://www.instagram.com", "_blank");
    });

    let socialMediaItems = document.querySelectorAll('.social-media li');
    socialMediaItems.forEach(item => {
        addSocialMediaHoverEffect(item);
    });

    function addSocialMediaHoverEffect(item) {
        let originalText = item.textContent;
        item.addEventListener('mouseover', function() {
            item.textContent = 'Visit ' + originalText;
        });
        item.addEventListener('mouseout', function() {
            item.textContent = originalText;
        });
    }
});
