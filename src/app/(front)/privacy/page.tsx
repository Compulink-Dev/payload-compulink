import React from 'react'
import Hero from '../_components/hero'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Lock, Eye, Mail, Server, Users, FileText } from 'lucide-react'

function PrivacyPolicy() {
  return (
    <div>
      <Hero
        backImage="cyber2.jpg"
        image=""
        title="Privacy Policy"
        subtitle="How We Protect and Handle Your Information"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="mb-8 border-2">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6" />
                <div>
                  <CardTitle className="text-2xl">Privacy Policy</CardTitle>
                  <CardDescription className="text-blue-100">
                    Last updated:{' '}
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                At Compulink Systems, we are committed to protecting your privacy and ensuring the
                security of your personal information. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read this privacy policy carefully. By using our services, you consent to the
                practices described in this policy.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Quick Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { id: 'information-collection', label: 'Information We Collect' },
                    { id: 'how-we-use', label: 'How We Use Information' },
                    { id: 'data-sharing', label: 'Data Sharing' },
                    { id: 'data-security', label: 'Data Security' },
                    { id: 'your-rights', label: 'Your Rights' },
                    { id: 'cookies', label: 'Cookies' },
                    { id: 'third-party', label: 'Third-Party Services' },
                    { id: 'changes', label: 'Policy Changes' },
                    { id: 'contact', label: 'Contact Us' },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-blue-600 hover:text-blue-700 hover:underline py-1 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Information We Collect */}
              <Card id="information-collection">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-blue-600" />
                    <CardTitle>Information We Collect</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Personal Information</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Name, email address, and contact details</li>
                      <li>Company information and job title</li>
                      <li>Billing and payment information</li>
                      <li>Technical support requests and communications</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Technical Information</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Service Data</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Network configuration and system logs</li>
                      <li>Service usage patterns and performance data</li>
                      <li>Security event information</li>
                      <li>Backup and recovery data</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card id="how-we-use">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Server className="h-5 w-5 text-blue-600" />
                    <CardTitle>How We Use Your Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-1">Service Delivery</h4>
                        <p className="text-sm text-gray-700">
                          Providing and maintaining our IT services and support
                        </p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-1">Customer Support</h4>
                        <p className="text-sm text-gray-700">
                          Responding to inquiries and technical support requests
                        </p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-1">Service Improvement</h4>
                        <p className="text-sm text-gray-700">
                          Enhancing and optimizing our services and user experience
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-1">Communication</h4>
                        <p className="text-sm text-gray-700">
                          Sending service updates and important notifications
                        </p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-1">Security</h4>
                        <p className="text-sm text-gray-700">
                          Protecting against fraud and maintaining system security
                        </p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-1">Legal Compliance</h4>
                        <p className="text-sm text-gray-700">
                          Meeting legal obligations and regulatory requirements
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Sharing */}
              <Card id="data-sharing">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <CardTitle>Data Sharing and Disclosure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    We do not sell, trade, or rent your personal information to third parties. We
                    may share information in the following circumstances:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Service Providers</h4>
                        <p className="text-sm text-gray-700">
                          With trusted partners who assist in providing our services (e.g., cloud
                          hosting, payment processing)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Legal Requirements</h4>
                        <p className="text-sm text-gray-700">
                          When required by law, court order, or governmental authority
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Business Transfers</h4>
                        <p className="text-sm text-gray-700">
                          In connection with a merger, acquisition, or sale of company assets
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Protection of Rights</h4>
                        <p className="text-sm text-gray-700">
                          To protect the rights, property, or safety of Compulink Systems, our
                          users, or others
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card id="data-security">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-blue-600" />
                    <CardTitle>Data Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational security measures to
                    protect your personal information against unauthorized access, alteration,
                    disclosure, or destruction.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Security Measures Include:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        <li>Encryption of sensitive data</li>
                        <li>Secure network infrastructure</li>
                        <li>Regular security assessments</li>
                        <li>Access controls and authentication</li>
                        <li>Employee security training</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Data Retention:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        <li>We retain personal information only as long as necessary</li>
                        <li>Retention periods based on legal requirements</li>
                        <li>Secure deletion of unnecessary data</li>
                        <li>Regular data cleanup procedures</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card id="your-rights">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <CardTitle>Your Rights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-gray-800 mb-1">Access and Correction</h4>
                        <p className="text-sm text-gray-700">
                          Right to access and correct your personal information
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-gray-800 mb-1">Data Portability</h4>
                        <p className="text-sm text-gray-700">
                          Right to receive your data in a portable format
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-gray-800 mb-1">Withdraw Consent</h4>
                        <p className="text-sm text-gray-700">
                          Right to withdraw consent for data processing
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-gray-800 mb-1">Deletion</h4>
                        <p className="text-sm text-gray-700">
                          Right to request deletion of your personal data
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-gray-800 mb-1">Objection</h4>
                        <p className="text-sm text-gray-700">
                          Right to object to certain data processing activities
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-gray-800 mb-1">Complaints</h4>
                        <p className="text-sm text-gray-700">
                          Right to lodge complaints with regulatory authorities
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card id="cookies">
                <CardHeader>
                  <CardTitle>Cookies and Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    We use cookies and similar tracking technologies to enhance your experience on
                    our website and services.
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">Essential Cookies</span>
                      <span className="text-sm text-gray-600">
                        Required for basic functionality
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">Analytics Cookies</span>
                      <span className="text-sm text-gray-600">Help us improve our services</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">Preference Cookies</span>
                      <span className="text-sm text-gray-600">
                        Remember your settings and preferences
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">
                    You can control cookie settings through your browser preferences. However,
                    disabling essential cookies may affect website functionality.
                  </p>
                </CardContent>
              </Card>

              {/* Third-Party Services */}
              <Card id="third-party">
                <CardHeader>
                  <CardTitle>Third-Party Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Our services may contain links to third-party websites or services that are not
                    operated by us. We have no control over and assume no responsibility for the
                    content, privacy policies, or practices of any third-party sites or services.
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
                    <p className="text-sm text-yellow-700">
                      We encourage you to review the privacy policies of any third-party sites you
                      visit. This privacy policy applies only to information collected by Compulink
                      Systems.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Policy Changes */}
              <Card id="changes">
                <CardHeader>
                  <CardTitle>Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    {`We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.`}
                  </p>
                  <p className="text-gray-700">
                    You are advised to review this Privacy Policy periodically for any changes.
                    Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card id="contact">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <CardTitle>Contact Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy or our data practices,
                    please contact us:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">privacy@compulink.co.zw</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Data Protection Officer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Compulink House, 13 Stirling Road, Workington, Harare, Zimbabwe
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
