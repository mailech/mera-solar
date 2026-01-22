import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileStyles.css';
import { User, Package, Settings, LogOut, MapPin, Briefcase, Phone, Mail, ShoppingBag } from 'lucide-react';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [activeTab, setActiveTab] = useState('profile');
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Profile Form State
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        enterprise: '',
        address: '',
        city: '',
        zip: ''
    });

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const res = await fetch('http://localhost:5050/api/auth/me', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                const data = await res.json();

                if (res.ok) {
                    setUser(data.data);
                    setOrders(data.data.orders || []);

                    // Initialize form data
                    setFormData({
                        username: data.data.username || '',
                        email: data.data.email || '',
                        mobile: data.data.mobile || '',
                        enterprise: data.data.enterprise || '',
                        address: data.data.address || '',
                        city: data.data.city || '',
                        zip: data.data.zip || ''
                    });
                } else if (res.status === 401) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setUpdating(true);
        setMessage({ type: '', text: '' });

        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:5050/api/auth/update-profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setMessage({ type: 'success', text: 'Profile updated successfully!' });
                // Update local user state partially
                setUser(prev => ({ ...prev, ...formData }));
            } else {
                setMessage({ type: 'error', text: data.message || 'Update failed' });
            }
        } catch (err) {
            console.error(err);
            setMessage({ type: 'error', text: err.message || 'Something went wrong' });
        } finally {
            setUpdating(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (loading) return <div className="loader-container">Loading Profile...</div>;

    if (!user) return null;

    return (
        <div className="profile-dashboard fade-in">
            {/* Sidebar */}
            <aside className="profile-sidebar">
                <div className="user-quick-info">
                    <div className="user-avatar-placeholder">
                        {user.username.charAt(0).toUpperCase()}
                    </div>
                    <h3>{user.username}</h3>
                    <p>{user.email}</p>
                    {user.enterprise && <p style={{ fontSize: '0.8rem', marginTop: '5px', color: '#00D084' }}>{user.enterprise}</p>}
                </div>

                <nav className="profile-nav">
                    <button
                        className={activeTab === 'profile' ? 'active' : ''}
                        onClick={() => setActiveTab('profile')}
                    >
                        <User size={18} /> My Profile
                    </button>
                    <button
                        className={activeTab === 'orders' ? 'active' : ''}
                        onClick={() => setActiveTab('orders')}
                    >
                        <Package size={18} /> Orders & Purchases
                    </button>
                    {/* <button 
                        className={activeTab === 'settings' ? 'active' : ''} 
                        onClick={() => setActiveTab('settings')}
                    >
                        <Settings size={18} /> Account Settings
                    </button> */}
                    <button onClick={handleLogout} className="logout-btn">
                        <LogOut size={18} /> Logout
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="profile-content">
                {activeTab === 'profile' && (
                    <div className="profile-tab">
                        <div className="section-header">
                            <h2>Profile Details</h2>
                        </div>

                        {message.text && (
                            <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'}`} style={{ marginBottom: '20px', padding: '10px', borderRadius: '8px', background: message.type === 'success' ? '#def7ec' : '#fde8e8', color: message.type === 'success' ? '#03543f' : '#9b1c1c' }}>
                                {message.text}
                            </div>
                        )}

                        <form onSubmit={handleUpdateProfile} className="profile-form-grid">
                            <div className="form-group">
                                <label>Full Name</label>
                                <div style={{ position: 'relative' }}>
                                    <input type="text" value={formData.username} disabled style={{ paddingLeft: '40px' }} />
                                    <User size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#888' }} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <div style={{ position: 'relative' }}>
                                    <input type="email" value={formData.email} disabled style={{ paddingLeft: '40px' }} />
                                    <Mail size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#888' }} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Mobile Number</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        placeholder="Enter mobile number"
                                        style={{ paddingLeft: '40px' }}
                                    />
                                    <Phone size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#888' }} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Enterprise / Company</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        name="enterprise"
                                        value={formData.enterprise}
                                        onChange={handleInputChange}
                                        placeholder="Company Name"
                                        style={{ paddingLeft: '40px' }}
                                    />
                                    <Briefcase size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#888' }} />
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>Address</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Street Address"
                                        style={{ paddingLeft: '40px' }}
                                    />
                                    <MapPin size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#888' }} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder="City"
                                />
                            </div>

                            <div className="form-group">
                                <label>Zip Code</label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleInputChange}
                                    placeholder="Zip Code"
                                />
                            </div>

                            <div className="full-width">
                                <button type="submit" className="btn-update" disabled={updating}>
                                    {updating ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {activeTab === 'orders' && (
                    <div className="orders-tab">
                        <div className="section-header">
                            <h2>Purchase History</h2>
                        </div>

                        {orders.length === 0 ? (
                            <div className="empty-orders">
                                <ShoppingBag size={48} />
                                <h3>No orders yet</h3>
                                <p>You haven't made any purchases yet. Browse our packages to get started.</p>
                                <button className="btn-update" style={{ marginTop: '20px', float: 'none' }} onClick={() => navigate('/shop')}>
                                    Browse Shop
                                </button>
                            </div>
                        ) : (
                            <div className="orders-table-wrapper">
                                <table className="orders-table">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Package / Item</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(order => (
                                            <tr key={order.id}>
                                                <td>#{order.id.toString().padStart(4, '0')}</td>
                                                <td>{order.package_name}</td>
                                                <td>{new Date(order.date).toLocaleDateString()}</td>
                                                <td>${order.amount}</td>
                                                <td>
                                                    <span className={`status-badge status-${order.status.toLowerCase()}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Profile;
