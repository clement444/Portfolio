# Portfolio - Clement Morere

Site personnel de Clement Morere, etudiant en 2e annee de Bachelor Cybersecurite a Ynov Campus Montpellier.
Le site presente mon parcours, mes competences, mes projets et un formulaire de contact.

Adresse prevue : https://morere.fr

## Technologies

- Next.js 16 avec l'App Router
- React 19
- TypeScript en mode strict
- Tailwind CSS 4
- AlignUI 1.2 pour les composants et le style
- Remix Icon pour les icones
- Zod pour la validation des donnees du formulaire
- Nodemailer pour l'envoi des emails
- Docker et nginx pour le deploiement

Il n'y a pas de base de donnees. Tout le contenu du site est ecrit dans des fichiers TypeScript du dossier src/content.

## Structure du projet

- src/app : les pages, le layout, la route API, le robots.txt et le sitemap.xml
- src/components/ui : les composants AlignUI
- src/components/layout : l'en-tete, le pied de page et le conteneur de section
- src/components/sections : les sections de la page d'accueil
- src/content : le contenu du site (profil, competences, projets, parcours, certifications, veille)
- src/lib : la validation, le nettoyage des entrees, la limitation de debit et l'envoi d'email
- src/types : les types et interfaces partages
- src/utils : les utilitaires demandes par AlignUI (cn, tv, polymorphic, recursiveCloneChildren)
- nginx : la configuration du reverse proxy pour morere.fr

## Installation

Il faut Node.js 22 ou plus.

```
git clone https://github.com/clement444/Portfolio.git
cd Portfolio
npm install
```

## Variables d'environnement

Le formulaire de contact a besoin d'un serveur SMTP. Les variables sont listees dans le fichier .env.example.

- SMTP_HOST : adresse du serveur SMTP
- SMTP_PORT : port du serveur SMTP (587 en general, 465 pour une connexion directe en TLS)
- SMTP_USER : identifiant du compte SMTP, utilise aussi comme expediteur
- SMTP_PASS : mot de passe du compte SMTP
- CONTACT_TO : adresse email qui recoit les messages du formulaire

Pour le developpement, copier le fichier d'exemple et le remplir :

```
cp .env.example .env.local
```

Le fichier .env et ses variantes sont ignores par Git. Aucun secret ne doit etre commite.

## Lancement en developpement

```
npm run dev
```

Le site est accessible sur http://localhost:3000.

Sans variables SMTP, le formulaire valide bien les champs mais l'envoi renvoie une erreur.

## Verification du code

```
npm run lint
npm run build
```

## Build et lancement en production

```
npm run build
npm run start
```

Le build utilise la sortie standalone de Next.js. Le serveur autonome se trouve dans .next/standalone.

## Deploiement sur un VPS

### 1. Enregistrements DNS chez OVH

Dans la zone DNS du domaine morere.fr, creer deux enregistrements de type A qui pointent vers l'adresse IP publique du VPS :

- morere.fr (champ sous-domaine laisse vide) : A vers l'IP du VPS
- www.morere.fr (sous-domaine www) : A vers l'IP du VPS

Si le VPS a une adresse IPv6, ajouter aussi deux enregistrements AAAA vers cette adresse.
La propagation prend en general de quelques minutes a quelques heures. On peut verifier avec :

```
dig morere.fr +short
dig www.morere.fr +short
```

### 2. Preparation du VPS

Installer Docker, le plugin Compose et nginx :

```
sudo apt update
sudo apt install -y docker.io docker-compose-plugin nginx
sudo systemctl enable --now docker
```

### 3. Recuperation du projet et des variables

```
git clone https://github.com/clement444/Portfolio.git
cd Portfolio
cp .env.example .env
nano .env
```

Remplir le fichier .env avec les vraies valeurs SMTP.

### 4. Lancement du conteneur

```
docker compose up -d --build
```

Le conteneur ecoute sur 127.0.0.1:3000. Il n'est pas expose directement sur internet, c'est nginx qui fait le lien.
Le conteneur tourne avec un utilisateur non root.

Pour verifier :

```
docker compose ps
docker compose logs -f
curl -I http://127.0.0.1:3000
```

### 5. Configuration de nginx

Copier la configuration fournie dans le projet :

```
sudo cp nginx/morere.fr.conf /etc/nginx/sites-available/morere.fr
sudo ln -s /etc/nginx/sites-available/morere.fr /etc/nginx/sites-enabled/morere.fr
sudo rm -f /etc/nginx/sites-enabled/default
sudo mkdir -p /var/www/certbot
```

Les blocs HTTPS ne fonctionneront qu'une fois les certificats crees. Il faut donc commencer par l'etape suivante.

### 6. Certificat Let's Encrypt avec certbot

Installer certbot :

```
sudo apt install -y certbot python3-certbot-nginx
```

Demander le certificat pour les deux noms de domaine :

```
sudo certbot --nginx -d morere.fr -d www.morere.fr
```

Certbot verifie que les enregistrements DNS pointent bien vers le VPS, cree les certificats et les ajoute a la configuration nginx.
Les certificats sont ranges dans /etc/letsencrypt/live/morere.fr/.

Verifier et recharger nginx :

```
sudo nginx -t
sudo systemctl reload nginx
```

Le renouvellement est automatique grace au timer systemd installe par certbot. On peut le tester avec :

```
sudo certbot renew --dry-run
```

### 7. Pare-feu

```
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### 8. Mise a jour du site

```
cd Portfolio
git pull
docker compose up -d --build
```

## Securite

- En-tetes HTTP definis dans next.config.ts : Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy et Strict-Transport-Security
- En-tete X-Powered-By desactive
- Formulaire de contact valide cote serveur avec Zod
- Champ honeypot pour les robots
- Limitation du debit par adresse IP, en memoire
- Nettoyage des entrees avant la construction de l'email pour eviter l'injection d'en-tetes
- Messages d'erreur generiques cote client
