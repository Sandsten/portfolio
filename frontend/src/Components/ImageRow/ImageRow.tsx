import styles from './ImageRow.module.scss';

const ImageRow = ({children}: any) => {
    return (
        <div className={styles.image}>{children}</div>
    )
}

export default ImageRow;