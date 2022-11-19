const isP = process.argv.includes("--production");
const isD = !isP;

export default{
    isP: isP,
    isD: isD,
    htmlMin: {
        collapseWhitespace: isP
    },
    pugFile: {
        
    },
    imageMin: {
        verbose: isP
    },
    fonter: {
        formats: ["eot","ttf","woff"]
    },
    webpack: {
        mode: isP ? "production" : "development"
    }
}