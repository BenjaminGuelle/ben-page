import moi from '../assets/imgMoi.png';

export const Home = () => {
  return (
    <div className={'container px-10 py-10'}>

      <header className={'container flex pb-20 items-center'}>
        <div className={'w-32 h-32 rounded-full overflow-hidden flex justify-center align-bottom shadow-2xl'}>
          <img src={moi} alt={'photo de moi'} className={'object-cover'}/>
        </div>
        <div className={'h-32 flex flex-col justify-around pl-4'}>
          <h1 className={'text-4xl'}>Benjamin GUELLE</h1>
          <h2 className={'text-2xl'}>Développeur typescript | front-end</h2>
          <p className={'text-xl text-primary'}>React Native / React.js / Angular</p>
        </div>
      </header>

      <section className={'mb-4'}>
        <div className={'w-full p-2 mb-2 bg-accent text-background flex items-center'}>
          <i className="fa-solid fa-brain"></i>
          <h3 className={'font-medium text-lg uppercase ml-1'}>| Compétences</h3>
        </div>
        <div className={'grid grid-cols-6'}>

          <div className={'py-2 col-span-2 border-l-2 pl-2 border-accent'}>
            <h4 className={'text-primary'}>Front-End</h4>
            <ul>
              <li>React.js(Next.js, Vite.js, Redux, Mobx)</li>
              <li>React Native, Expo, gestion des modules natif</li>
              <li>Angular CLI(RXJS, Ng-zorro)</li>
            </ul>
          </div>

          <div className={'py-2 col-span-2 border-l-2 pl-2 border-accent'}>
            <h4 className={'text-primary'}>Back-End</h4>
            <ul>
              <li>Node.js (Express.js)</li>
              <li>REST API</li>
              <li>Base de données SQL (MySQL, PostgreSQL) et NoSQL (MongoDB)</li>
              <li>Firebase</li>
            </ul>
          </div>

          <div className={'py-2 col-span-2 border-l-2 pl-2 border-accent'}>
            <h4 className={'text-primary'}>Utilitaires</h4>
            <ul>
              <li>Tailwind.css</li>
              <li>Responsive Design</li>
              <li>Git, Github, Gitlab</li>
              <li>Figma</li>
            </ul>
          </div>

        </div>
      </section>

      <section className={'mb-4'}>
        <div className={'w-full p-2 mb-2 bg-accent text-background flex items-center'}>
          <i className="fa-solid fa-briefcase"></i>
          <h3 className={'font-medium text-lg uppercase ml-1'}>| Expériences Professionnelles</h3>
        </div>

        <div>
          <div className={'flex justify-between'}>
            <h4>Openeat,
              <span className={'text-secondary'}> Développeur typescript</span>
            </h4>
            <p className={'text-sm text-primary'}>Oct 2021 - Avril 2024 <span className={'text-text'}>| Full remote</span></p>
          </div>
          <p>Conception d'applications React, Angular et React Native, mise en place de bonnes pratique et tests.</p>
          <p>Développement de l'application mobile de zéro en React Native, évolutions et maintenabilité.</p>
          <p>Collaborer avec des UX/UI pour traduire les maquettes graphiques en code fonctionnel.</p>
          <p>Implémentation des méthodologies de travail Agile, notamment SCRUM, pour assurer une gestion de projet efficace et une collaboration transparente au sein de l'équipe.</p>
        </div>
      </section>
    </div>
  );
};
