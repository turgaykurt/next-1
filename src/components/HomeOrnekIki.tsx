interface SectionProps {
    title: string;
    content: string;
}

const HomeOrnekIki: React.FC<SectionProps> = ({ title, content }) => {
    return (
        <section style={styles.section}>
            <div className="kapsayici">
                <h2 style={styles.title}>{title}</h2>
                <p style={styles.content}>{content}</p>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: "80px 0px",
        backgroundColor: "lightblue",
        borderRadius: "8px",
    },
    title: {
        fontSize: "48px",
        marginBottom: "10px",
    },
    content: {
        fontSize: "16px",
        lineHeight: "1.5",
    },
};

export default HomeOrnekIki;
