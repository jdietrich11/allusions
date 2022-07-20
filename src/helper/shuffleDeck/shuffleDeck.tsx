const shuffle = (props: [] )=> {
    let shuffle1 = props.sort(() => Math.random() -.5);
    let shuffle2 = shuffle1.sort(() => Math.random() - .5);
    return shuffle2;
}

export default shuffle;
