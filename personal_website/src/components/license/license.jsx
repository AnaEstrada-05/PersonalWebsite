import { motion } from "framer-motion"
import {fadeUp} from "../../animations/animations"
import "./license.css"

const License = () => {
    return (
        <div className="licenseContainer">
            <motion.div className="title" variants={fadeUp}>
                <h1>LICENSE &</h1>
                <h1>CERTIFICATES</h1>
            </motion.div>
        </div>
    );
}

export default License;