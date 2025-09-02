import { ArrowRight } from 'lucide-react'

const SlideInArrowButton = () => {
    return (
        <button className="group px-6 cursor-pointer py-3 bg-blue-600 rounded-full flex items-center gap-2 font-medium hover:pl-8 transition-all duration-300">
            <span>Next</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
    )
}

export default SlideInArrowButton
