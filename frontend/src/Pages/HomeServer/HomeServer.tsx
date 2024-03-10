import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import Image from '../../Components/Image/Image';

import styles from './HomeServer.module.scss';

import screenFetchImage from '../../assets/images/homeserver/screenfetch.webp';
import CodeBox from '../../Components/CodeBox';

const HomeServer = () => {

    console.log(SyntaxHighlighter.supportedLanguages)

    const plexCompose = `version: '3.8'

services:
    plex:
        image: ghcr.io/linuxserver/plex:latest
        container_name: plex
        network_mode: host # Using the host network directly
        environment:
            - PUID=1000
            - PGID=1000
            - VERSION=docker
        volumes:
            - $\{PLEX_DATA}:/config
            - $\{TV_SERIES}:/tv
            - $\{MOVIES}:/movies
            - $\{MUSIC}:/musik
            - $\{HOME_PICTURES}:/bilder
            - $\{HOME_VIDEOS}:/videokamera
            - $\{LECTURES}:/lectures
            - $\{STANDUP}:/standup
        restart: always

    tautulli:
        image: lscr.io/linuxserver/tautulli:latest
        container_name: tautulli
        environment:
            - PUID=1000
            - PGID=1000
            - TZ=\${TIME_ZONE}
        volumes:
            - ./tautulli-config:/config
        ports:
            - '8182:8181'
        restart: always`;

    const cronTab = `# From Monday to Friday, hibernate between 02:00 and 17:00. 1h = 3600 sec
0 2 * * mon,tue,wed,thu,fri root /usr/sbin/rtcwake -m mem -s 54000
# From friday to sunday, hibernate between 03:00 and 08:00
0 3 * * sat,sun root /usr/sbin/rtcwake -m mem -s 18000
# Renew SSL certificates. Attempt at 12:00 on the first day of every month
0 12 1 * * root certbot renew`;

    return (
        <div className={styles.scrollContainer}>
            <div className={styles.container}>
                <div>
                    <h1>Home Server</h1>

                    <p>A while ago I found som old MiniDV casettes with home videos that my parents captured around the year 2000. I digitalized the tapes to be able to store them long term and to share with the family. I then thought that there must be a way of streaming the videos locally, in essence have my own "Netflix" just for the family. After some googling I found the world of Plex and home servers, which I of course had to test out myself.</p>

                    <p>Here I will give an overview of what my server setup looks like, what my configs are and so forth.</p>

                    <h2>Hardware</h2>

                    <p>I repurposed my old gaming desktop PC to be a dedicated server. I bought a 4TB drive to store all the video on and for the OS I use an SSD. The processor is an AMD FX-8350 which is starting to get quite old and it's not very power efficient. I plan to replace it with a modern Intel CPU. Newer Intel CPUs have Quick Sync which is dedicated hardware for encoding and decoding video when streaming, perfect for Plex.</p>

                    <h2>Operating System</h2>

                    <p>I've used Ubuntu quite a bit, so going for Ubuntu Server was an easy choice. </p>
                    <Image caption='Server specifications' figNumber={1} imagePath={screenFetchImage} maxWidth='800px' />

                    <h2>Containers</h2>

                    <p>I use docker for all my containers and almost every single application that I serve is a container. I use a single compose.yaml file for all services in my media server stack. Here's an excerpt with the plex service in my compose file. It also includes Tautulli which is a web application that monitors and tracks different statistics from the Plex server.</p>

                    <CodeBox 
                        code={plexCompose}
                        languange='yaml'
                        width='800px'
                        caption='Excerpt of plex service in my compose file.'
                    />

                    <p>I host many more services but choose to limit this excerpt to just Plex related ones.</p>

                    <h2>Local Access</h2>

                    <p>In order for users on the local network to access Plex, they just have to connect to http:://{'<'}ip of server{'>'}:32400. For this to work you need to configure your server to have a static local IP, that's something you have to do in general so you know which IP to use when connecting to the server.</p>

                    <h2>Remote Access</h2>
                    
                    <p>When gaining remote access to the Plex server I did not want to expose :32400 publicly, and instead went for :443 to limit the number of exposed ports. 
                    </p>
                    
                    <p>To achieve that I use Nginx in front of Plex. And all the traffic is proxied through Cloudflare's DNS service.</p>

                    <h2>Maintenance</h2>
                    
                    <p>I run cron jobs for most of the maintenance. Mainly for hibernating the server during the hours when it's typically not used. And also for updating the SSL certificates.</p>

                    <CodeBox 
                        code={cronTab}
                        languange='yaml'
                        width='800px'
                        caption='Excerpt of plex service in my compose file.'
                    />

                    <h2>Access</h2>

                    <p>I only allow remote access to the server from my local network. And access is gained through ssh keys. The first thing you always should do when setting up a new server is allow access with your SSL key and disable access with password. This greatly improves security by making it impossible to brute force. The UX is also better where you don't have to enter your password every time you SSH into the server.</p>

                </div>

                <div className={styles.outlineSidebar}>
                </div>
            </div>
        </div>
    )
}

export default HomeServer;