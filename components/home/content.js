import styled, { keyframes } from 'styled-components';

import utilStyles from '../../styles/util.module.css';
import styls from '../../styles/Content.module.css';

const Box = styled.div`
    width: 100px;
    height: 1px;
    background-color: #cccccc;
    margin: 23px auto;
`;

export default function Content () {


  return ( 
    <>
      <div className={`${styls.content} ${utilStyles.plain}`}>
            <article>
              <p>
                Hi, I&apos;m Dsapr, a sophomore at{' '}
                <span className={utilStyles.stress}>
                  Software Engineer&nbsp;
                </span>
                of Xi&apos;an.
              </p>
              <p>
                I love <span className={utilStyles.stress}>cats</span>. 🐈
              </p>
            </article>
          <div>
        </div>
        
        <Box/>
    
        </div>
        
  </>
    
  );
}
