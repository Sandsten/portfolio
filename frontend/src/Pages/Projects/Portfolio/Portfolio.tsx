import CodeBox from '../../../Components/CodeBox';
import Image from '../../../Components/Image/Image';
import Link from '../../../Components/Link';
import ProjectContainer from '../../../Components/ProjectContainer/ProjectContainer';

import cloudFlareSSLFull from '../../../assets/images/portfolio/cloudflare-ssl-full.webp';

const Portfolio: React.FC = () => {

    const apacheConfig = `<VirtualHost *:443>
    ServerName staffansandberg.com

    SSLEngine on
    SSLCertificateFile /etc/apache2/ssl-cert/staffansandberg.com.pem
    SSLCertificateKeyFile /etc/apache2/ssl-cert/staffansandberg.com.key

    # Reverse proxy for /myapp
    ProxyPass /portal http://127.0.0.1:4000/portal
    ProxyPassReverse /portal http://127.0.0.1:4000/portal

    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
</VirtualHost>

<VirtualHost *:80>
    ServerName 103.45.246.16

    Redirect permanent / https://staffansandberg.com/
</VirtualHost>`;

    return (
        <ProjectContainer>
            <div>
                <h1>Portfolio Website</h1>

                <p>I've developed this website to showcase some of my projects and demonstrate my continuous growth in full-stack development. I will go through some of the details around how this website is build and hosted.</p>

                <Link href='https://github.com/Sandsten/portfolio' text='Portfolio project on Github'/>

                <h2>Frontend</h2>
                
                <p>The frontend is mainly built with React. Some parts use Three.js for 3D effects. The bundler and dev-server is Vite, I previously used Webpack but recently moved away from it to Vite for its simplicity.</p>

                <p>Typescript is used throughout the entirety of the site as well. I like types and the help they bring with autocompletion.</p>

                <h2>Backend</h2>

                <p>I'm using Node in the backend to serve the static frontend files. As well as various endpoints for authentication and more. I plan to add more functionality in the future with a more fully fledged OIDC integration for federating authentication to Github. Just because it's something I've always wanted to explore and think is kind of neat.</p>

                <h2>Docker</h2>

                <p>Docker is fantastic to use both during development and when deploying the site. When I develop I do not need to install any specific version of Node etc and I can be sure that it will work on any machine running docker. A single compose.yaml file starts both back and frontend with hot reload through mount volumes. When deploying the site I just need a docker image, no need to copy files directly to the server. All you need is Docker!</p>

                <h2>Hosting</h2>

                <h3>VPS</h3>

                <p>I rent a small server from <Link href='https://www.kamatera.com' text='Kamatera'/> on which I run Ubuntu. I could probably host the website for free on for example Github, but I want the flexibility of running whatever I want and not just host static files.</p>

                <p>I could've hosted this on my home server as well, but I don't have that up and running 24/7 and I want my Portfolio to be available at all times.</p>
                
                <h3>Domain and SSL certificate</h3>

                <p>The domain for this site I've bought from <Link href='https://www.namecheap.com' text='Namecheap'/> and reconfigured the DNS server to be <Link href='https://www.cloudflare.com' text='Cloudflare'/>. Coludflare offers the functionality of acting as a proxy and free SSL certificates that are automatically renewed.</p>

                <p>Letting cloudflare be the proxy has the benefit of not directly exposing the IP of the VPS. It also has caching features to reduce the limited 
                amount of traffic I have in my price plan at Kamatera.</p>

                <p>In Figure 1 you can see that I have full encryption between the browser and Cloudflare, as well as between Cloudflare and the VPS. The first one is handled automatically by Cloudflare. The latter you have to do some configuring for yourself. Over att Cloudflare you can generate a free TSL certificate for your domain, that are valid for traffic between Cloudflare and your server. You can set its TTL to 15 years, so it's basically set and forget.</p>

                <Image
                    imagePath={cloudFlareSSLFull}
                    maxWidth='800px'
                    caption='Full (strict) mode selected'
                    figNumber={1}
                />

                <p>The certificate and key from Cloudflare have to be stored on the VPS where the website is served. I use Apache as the webserver and the config is quite straight forward for enabling SSL</p>

                <CodeBox figNumber={2} code={apacheConfig} languange='html' caption='Apache config with SSL cert and reverse proxy.'/>

            </div>
        </ProjectContainer>
    )
}

export default Portfolio;