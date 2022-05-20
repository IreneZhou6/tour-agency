import './Search.styles.scss'
import Gold from '../../assets/gold.png'

export default function Search() {
    return (
        <div className='search'>
            <div className="search-left">
                <div className='info'>
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p>Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at Sandals Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and Curaçao, feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts and PADI® certified scuba diving at most resorts. If you are planning a wedding, Sandals is the leader in Caribbean destination weddings and honeymoon packages.</p>
                </div>
                <div className="search-left-bottom">
                    <div className="box">
                        <div>
                            <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                        </div>
                        <div>
                            <h3>WORLD'S LEADING</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <h3>NO ONE INCLUDES MORE</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            <button>View Packages</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-right">
                <div className="promo">
                    <h4>GET AN ADDITIONAL 7% OFF</h4>
                    <p className="timer">12 HOURS LEFT!</p>
                    <p className="offers">VIEW ALL CURRENT OFFERS</p>
                </div>
                <form>
                    <div className="input-wrap">
                        <label htmlFor='destinations'>Destination</label>
                        <select id='destinations'>
                            <option value="1">Grande Antigua</option>
                            <option value="2">Grenda</option>
                            <option value="3">Emerald Bay</option>
                            <option value="4">Bora Bora</option>
                            <option value="5">Key West</option>
                            <option value="6">Maldives</option>
                            <option value="7">Barbados</option>
                        </select>
                    </div>
                    <div className="date">
                        <div className="input-wrap">
                            <label>Check-In</label>
                            <input type="date" />
                        </div>
                        <div className="input-wrap">
                            <label>Check-Out</label>
                            <input type="date" />
                        </div>
                    </div>
                    <button>Rates & Availabilities </button>
                </form>
            </div>
        </div>
    )
}