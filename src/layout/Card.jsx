import Content from '../components/Content.jsx'

const Card = () => {
    return (
        <main>
            <div>
                <img 
                    src='/img.png' 
                    alt='image of Laura'
                    className="rounded-t-2xl" 
                />
                <Content />
            </div>
        </main>
    )
}

export default Card