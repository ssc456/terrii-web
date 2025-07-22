import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { 
  listCareHomes, 
  createCareHome, 
  updateCareHome, 
  deleteCareHome 
} from '../lib/terriiApi';
import { toast } from 'sonner';
import { 
  Building, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  X,
  ArrowLeft,
  Users,
  MapPin,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

interface CareHome {
  id: string;
  name: string;
  address?: string | null;
  city?: string | null;
  postCode?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  website?: string | null;
  adminUsers?: {
    items: any[];
  };
  residents?: {
    items: any[];
  };
  createdAt?: string | null;
  updatedAt?: string | null;
}

export function CareHomeManagement() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [careHomes, setCareHomes] = useState<CareHome[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postCode: '',
    phoneNumber: '',
    email: '',
    website: ''
  });

  useEffect(() => {
    loadCareHomes();
  }, []);

  const loadCareHomes = async () => {
    try {
      setLoading(true);
      const data = await listCareHomes();
      console.log('Care homes data for management:', data);
      
      // Type conversion to match our interface  
      const careHomesData = (data || []).map((item: any) => ({
        id: item.id,
        name: item.name,
        address: item.address,
        city: item.city,
        postCode: item.postCode,
        phoneNumber: item.phoneNumber,
        email: item.email,
        website: item.website,
        adminUsers: item.adminUsers,
        residents: item.residents,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt
      }));
      
      console.log('Processed care homes data:', careHomesData);
      setCareHomes(careHomesData);
    } catch (error) {
      console.error('Error loading care homes:', error);
      toast.error('Failed to load care homes');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    if (!formData.name.trim()) {
      toast.error('Care home name is required');
      return;
    }

    try {
      await createCareHome({
        ...formData,
        createdByID: user?.userId
      });
      
      toast.success('Care home created successfully');
      setShowCreateForm(false);
      setFormData({
        name: '',
        address: '',
        city: '',
        postCode: '',
        phoneNumber: '',
        email: '',
        website: ''
      });
      await loadCareHomes();
    } catch (error) {
      console.error('Error creating care home:', error);
      toast.error('Failed to create care home');
    }
  };

  const handleEdit = (careHome: CareHome) => {
    setEditingId(careHome.id);
    setFormData({
      name: careHome.name || '',
      address: careHome.address || '',
      city: careHome.city || '',
      postCode: careHome.postCode || '',
      phoneNumber: careHome.phoneNumber || '',
      email: careHome.email || '',
      website: careHome.website || ''
    });
  };

  const handleUpdate = async (careHomeId: string) => {
    if (!formData.name.trim()) {
      toast.error('Care home name is required');
      return;
    }

    try {
      await updateCareHome(careHomeId, formData);
      toast.success('Care home updated successfully');
      setEditingId(null);
      await loadCareHomes();
    } catch (error) {
      console.error('Error updating care home:', error);
      toast.error('Failed to update care home');
    }
  };

  const handleDelete = async (careHomeId: string, careHomeName: string) => {
    if (!window.confirm(`Are you sure you want to delete "${careHomeName}"? This action cannot be undone.`)) {
      return;
    }

    try {
      await deleteCareHome(careHomeId);
      toast.success('Care home deleted successfully');
      await loadCareHomes();
    } catch (error) {
      console.error('Error deleting care home:', error);
      toast.error('Failed to delete care home');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowCreateForm(false);
    setFormData({
      name: '',
      address: '',
      city: '',
      postCode: '',
      phoneNumber: '',
      email: '',
      website: ''
    });
  };

  const renderFormFields = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        label="Care Home Name *"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Enter care home name"
        required
      />
      <Input
        label="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        placeholder="Enter address"
      />
      <Input
        label="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        placeholder="Enter city"
      />
      <Input
        label="Post Code"
        value={formData.postCode}
        onChange={(e) => setFormData({ ...formData, postCode: e.target.value })}
        placeholder="Enter post code"
      />
      <Input
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        placeholder="Enter phone number"
      />
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Enter email address"
      />
      <div className="md:col-span-2">
        <Input
          label="Website"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          placeholder="Enter website URL"
        />
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center">
        <div className="animate-pulse text-terrii-text-primary">Loading care homes...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-terrii-blue/20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Button
                variant="outline"
                onClick={() => navigate('/admin')}
                className="mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-terrii-text-primary">Care Home Management</h1>
                <p className="text-terrii-text-secondary">Manage care homes and their settings</p>
              </div>
            </div>
            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-terrii-green-dark hover:bg-terrii-green text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Care Home
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Create Form */}
        {showCreateForm && (
          <div className="bg-white rounded-lg shadow-terrii p-6 mb-8">
            <h2 className="text-lg font-semibold text-terrii-text-primary mb-4">Create New Care Home</h2>
            {renderFormFields()}
            <div className="flex justify-end space-x-3 mt-6">
              <Button variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button 
                onClick={handleCreate}
                className="bg-terrii-green-dark hover:bg-terrii-green text-white"
              >
                <Save className="h-4 w-4 mr-2" />
                Create Care Home
              </Button>
            </div>
          </div>
        )}

        {/* Care Homes List */}
        <div className="space-y-6">
          {careHomes.length === 0 ? (
            <div className="bg-white rounded-lg shadow-terrii p-12 text-center">
              <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-terrii-text-primary mb-2">No Care Homes</h3>
              <p className="text-terrii-text-secondary mb-6">Get started by creating your first care home.</p>
              <Button
                onClick={() => setShowCreateForm(true)}
                className="bg-terrii-green-dark hover:bg-terrii-green text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Care Home
              </Button>
            </div>
          ) : (
            careHomes.map((careHome) => (
              <div key={careHome.id} className="bg-white rounded-lg shadow-terrii">
                {editingId === careHome.id ? (
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-terrii-text-primary mb-4">
                      Edit Care Home
                    </h3>
                    {renderFormFields()}
                    <div className="flex justify-end space-x-3 mt-6">
                      <Button variant="outline" onClick={handleCancel}>
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                      <Button 
                        onClick={() => handleUpdate(careHome.id)}
                        className="bg-terrii-green-dark hover:bg-terrii-green text-white"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-terrii-text-primary">
                          {careHome.name}
                        </h3>
                        <div className="text-sm text-terrii-text-secondary space-y-1 mt-2">
                          {careHome.address && (
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {careHome.address}
                              {careHome.city && `, ${careHome.city}`}
                              {careHome.postCode && ` ${careHome.postCode}`}
                            </div>
                          )}
                          {careHome.phoneNumber && (
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2" />
                              {careHome.phoneNumber}
                            </div>
                          )}
                          {careHome.email && (
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 mr-2" />
                              {careHome.email}
                            </div>
                          )}
                          {careHome.website && (
                            <div className="flex items-center">
                              <Globe className="h-4 w-4 mr-2" />
                              <a 
                                href={careHome.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-terrii-blue hover:underline"
                              >
                                {careHome.website}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => handleEdit(careHome)}
                          className="text-sm"
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleDelete(careHome.id, careHome.name)}
                          className="text-sm text-red-600 hover:text-red-700 hover:border-red-200"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="h-4 w-4 text-terrii-blue mr-1" />
                        </div>
                        <div className="text-lg font-semibold text-terrii-text-primary">
                          {careHome.residents?.items?.length || 0}
                        </div>
                        <div className="text-xs text-terrii-text-secondary">Residents</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="h-4 w-4 text-terrii-green mr-1" />
                        </div>
                        <div className="text-lg font-semibold text-terrii-text-primary">
                          {careHome.adminUsers?.items?.length || 0}
                        </div>
                        <div className="text-xs text-terrii-text-secondary">Staff</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-terrii-text-primary">
                          {new Date(careHome.createdAt || '').toLocaleDateString()}
                        </div>
                        <div className="text-xs text-terrii-text-secondary">Created</div>
                      </div>
                      <div className="text-center">
                        <Button
                          variant="outline"
                          onClick={() => navigate(`/select-care-home?loginAs=${careHome.id}`)}
                          className="text-xs"
                        >
                          Login as User
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
