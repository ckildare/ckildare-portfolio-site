import { schoolProjectData } from 'public/data/schoolProjectData';
import styles from './schoolProjects.module.scss';
import CircleDivider from '@/components/circleDivider';
import Project from '@/components/contentSection/project';

const SchoolProjects = () => {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.title}>School Projects</div>
      <div className={styles.projectSections}>
        {schoolProjectData.map((project, key) => {
          return (
            <div className={styles.projectSection} key={key}>
              <Project project={project} />
              {key != schoolProjectData.length - 1 && <CircleDivider />}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default SchoolProjects;