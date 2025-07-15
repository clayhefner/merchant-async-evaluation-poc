import React, { useState, useEffect } from "react";
import {
  Button,
  Spin,
  Typography,
  Result,
  Form,
  Input,
  Card,
  Layout,
  Menu,
  Avatar,
  Dropdown,
  Space,
  Breadcrumb,
  Alert,
  Badge,
  notification,
} from "antd";
import {
  LoadingOutlined,
  UserOutlined,
  DashboardOutlined,
  ShopOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import "./App.css";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

interface MerchantData {
  merchantName: string;
  businessType: string;
  contactEmail: string;
  phoneNumber: string;
  address: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [evaluated, setEvaluated] = useState(false);
  const [polling, setPolling] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("merchant-evaluation");
  const [missingRequirementsCount, setMissingRequirementsCount] =
    useState<number>(5);
  const [backgroundProcessing, setBackgroundProcessing] = useState(false);
  const [evaluationTimeoutId, setEvaluationTimeoutId] =
    useState<NodeJS.Timeout | null>(null);
  const [form] = Form.useForm<MerchantData>();

  const requiredFields = [
    "merchantName",
    "businessType",
    "contactEmail",
    "phoneNumber",
    "address",
  ];

  const calculateMissingRequirements = (values: MerchantData) => {
    const missingCount = requiredFields.filter(
      (field) =>
        !values[field as keyof MerchantData] ||
        values[field as keyof MerchantData].trim() === ""
    ).length;
    return missingCount;
  };

  // Calculate missing requirements on page load
  useEffect(() => {
    const currentValues = form.getFieldsValue();
    const missingCount = calculateMissingRequirements(currentValues);
    setMissingRequirementsCount(missingCount);
  }, [form]);

  const simulateEventTrigger = (values: MerchantData) => {
    setLoading(true);
    setEvaluated(false);
    setPolling(true);
    setBackgroundProcessing(false);

    // Simulate async evaluation that determines missing requirements
    const timeoutId = setTimeout(() => {
      const missingCount = calculateMissingRequirements(values);
      setMissingRequirementsCount(missingCount);
      setEvaluated(true);
      setPolling(false);
      setLoading(false);
      setBackgroundProcessing(false);
      setEvaluationTimeoutId(null);
    }, 6000);

    setEvaluationTimeoutId(timeoutId);
  };

  const cancelEvaluation = () => {
    if (evaluationTimeoutId) {
      clearTimeout(evaluationTimeoutId);
      setEvaluationTimeoutId(null);
    }
    setLoading(false);
    setPolling(false);

    // Show notification
    notification.info({
      message: "Evaluation Window Closed",
      description:
        "Processing continues in background - refresh page to see results.",
      duration: 5,
      placement: "topRight",
      style: {
        background: "rgba(30, 30, 50, 0.95)",
        border: "1px solid rgba(79, 172, 254, 0.3)",
        color: "#e0e0e0",
      },
    });
  };

  useEffect(() => {
    if (!polling) return;

    const interval = setInterval(() => {
      console.log("Polling backend...");
    }, 2000);

    return () => clearInterval(interval);
  }, [polling]);

  const userMenuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
    },
  ];

  const sidebarItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "merchant-evaluation",
      icon: <ShopOutlined />,
      label: "Merchant Evaluation",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
  ];

  const renderContent = () => {
    if (selectedKey === "merchant-evaluation") {
      return (
        <>
          <Breadcrumb style={{ marginBottom: 16 }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Merchant Evaluation</Breadcrumb.Item>
          </Breadcrumb>

          <Alert
            message={
              <Space>
                <ExclamationCircleOutlined />
                <span>
                  <strong>Missing Requirements:</strong>
                  <Badge
                    count={missingRequirementsCount}
                    style={{
                      backgroundColor:
                        missingRequirementsCount > 0 ? "#ff4d4f" : "#52c41a",
                      marginLeft: 8,
                    }}
                  />
                  {missingRequirementsCount === 0
                    ? " All required fields are complete!"
                    : ` ${missingRequirementsCount} required field${
                        missingRequirementsCount > 1 ? "s" : ""
                      } missing`}
                </span>
              </Space>
            }
            type={missingRequirementsCount > 0 ? "warning" : "success"}
            style={{ marginBottom: 24 }}
            className="alert-container"
          />

          <Card className="merchant-form-card" style={{ marginBottom: 24 }}>
            <div style={{ position: "relative" }}>
              <Form
                form={form}
                layout="vertical"
                onFinish={simulateEventTrigger}
                style={{ opacity: loading ? 0.5 : 1 }}
              >
                <Form.Item name="merchantName" label="Merchant Name">
                  <Input
                    placeholder="Enter merchant name"
                    disabled={loading}
                    style={{ borderRadius: "8px", height: "40px" }}
                  />
                </Form.Item>

                <Form.Item name="businessType" label="Business Type">
                  <Input
                    placeholder="Enter business type"
                    disabled={loading}
                    style={{ borderRadius: "8px", height: "40px" }}
                  />
                </Form.Item>

                <Form.Item name="contactEmail" label="Contact Email">
                  <Input
                    placeholder="Enter contact email"
                    disabled={loading}
                    style={{ borderRadius: "8px", height: "40px" }}
                  />
                </Form.Item>

                <Form.Item name="phoneNumber" label="Phone Number">
                  <Input
                    placeholder="Enter phone number"
                    disabled={loading}
                    style={{ borderRadius: "8px", height: "40px" }}
                  />
                </Form.Item>

                <Form.Item name="address" label="Address">
                  <Input.TextArea
                    placeholder="Enter address"
                    rows={3}
                    disabled={loading}
                    style={{ borderRadius: "8px" }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={loading}
                    block
                    className="save-button"
                  >
                    Save
                  </Button>
                </Form.Item>
              </Form>

              {loading && (
                <div
                  className="spinner-container"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1000,
                    textAlign: "center",
                  }}
                >
                  <Spin
                    indicator={
                      <LoadingOutlined
                        style={{ fontSize: 32, color: "#4facfe" }}
                        spin
                      />
                    }
                    size="large"
                  />
                  <div
                    style={{
                      marginTop: 16,
                      color: "#e0e0e0",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Evaluating Updated Merchant Data
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      color: "#b0b0b0",
                      fontSize: "14px",
                    }}
                  >
                    Page will automatically refresh when complete.
                    <p
                      style={{
                        marginTop: 12,
                        marginBottom: 0,
                        color: "#ffffff",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: 1.4,
                      }}
                    >
                      Close this window if needed. Evaluation will continue in
                      the background.
                    </p>
                  </div>
                  <Button
                    type="default"
                    onClick={cancelEvaluation}
                    className="cancel-button"
                    style={{
                      marginTop: 16,
                    }}
                  >
                    Close Window
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </>
      );
    }

    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Title level={3}>Coming Soon</Title>
        <p>This section is under development.</p>
      </div>
    );
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Title level={4} style={{ margin: 0 }} className="brand-logo">
            {collapsed ? "ME" : "MerchantEval"}
          </Title>
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={sidebarItems}
          onClick={({ key }) => setSelectedKey(key)}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 16px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px" }}
          />

          <Space>
            <Dropdown
              menu={{ items: userMenuItems }}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Space style={{ cursor: "pointer", color: "#e0e0e0" }}>
                <Avatar icon={<UserOutlined />} />
                <span style={{ color: "#e0e0e0" }}>Admin User</span>
              </Space>
            </Dropdown>
          </Space>
        </Header>
        <Content
          className="content-container"
          style={{ margin: "24px 16px", padding: 24 }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
