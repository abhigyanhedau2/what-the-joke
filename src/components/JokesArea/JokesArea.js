import React from 'react';
import classes from './JokesArea.module.css';

const JokesArea = () => {
    return (
        <div className={classes['jokes-area-wrapper']}>
            <div className={classes['category-buttons-wrapper']}>
                <ul className={classes['category-list-wrapper']}>
                    <li className={classes.listItem}><button>All</button></li>
                    <li className={classes.listItem}><button>Programming</button></li>
                    <li className={`${classes.listItem}`}><button>Misc</button></li>
                    <li className={classes.listItem}><button>Dark</button></li>
                    <li className={classes.listItem}><button>Pun</button></li>
                    <li className={classes.listItem}><button>Spooky</button></li>
                    <li className={classes.listItem}><button>Christmas</button></li>
                </ul>
            </div>
            <div className={classes.jokesList}>
                
            </div>
        </div>
    )
};

export default JokesArea;