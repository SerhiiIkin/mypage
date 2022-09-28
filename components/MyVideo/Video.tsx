export default function Video({styles}): JSX.Element {
    return (
        <iframe
            className={styles}
            src="https://www.youtube.com/embed/yv31AS3ihlU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
    );
}