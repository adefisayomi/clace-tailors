import {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './styles/swipePages.module.scss'



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export default function SwipePages ({pages, index= 0, axis= 'x'}) {

        const [activePage, setActivePage] = useState(index)
        const maxSteps = pages.length || 0

        const goNext = () => setActiveStep((prevPage) => prevPage + 1)

        const goBack = () => setActiveStep((prevPage) => prevPage - 1)

        const handlePageChange = page => setActivePage(page)

        return (
            <div className={styles.swipe}>

            <AutoPlaySwipeableViews
                index={activePage}
                animateHeight
                axis= {axis}
                animateTransitions
                onChangeIndex={() => handlePageChange(index)}
                enableMouseEvents= {false}
            >
                {Object.keys(pages).map( page => (
                  <> {pages[page]} </>
                ))}
            </AutoPlaySwipeableViews>
            
            </div>
        );
}


