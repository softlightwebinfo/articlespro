// Code generated by protoc-gen-go. DO NOT EDIT.
// source: proto/userService.proto

package proto

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type UserServiceBool struct {
	Success              bool     `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserServiceBool) Reset()         { *m = UserServiceBool{} }
func (m *UserServiceBool) String() string { return proto.CompactTextString(m) }
func (*UserServiceBool) ProtoMessage()    {}
func (*UserServiceBool) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{0}
}

func (m *UserServiceBool) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserServiceBool.Unmarshal(m, b)
}
func (m *UserServiceBool) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserServiceBool.Marshal(b, m, deterministic)
}
func (m *UserServiceBool) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserServiceBool.Merge(m, src)
}
func (m *UserServiceBool) XXX_Size() int {
	return xxx_messageInfo_UserServiceBool.Size(m)
}
func (m *UserServiceBool) XXX_DiscardUnknown() {
	xxx_messageInfo_UserServiceBool.DiscardUnknown(m)
}

var xxx_messageInfo_UserServiceBool proto.InternalMessageInfo

func (m *UserServiceBool) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

type UserSocial struct {
	Icon                 string   `protobuf:"bytes,1,opt,name=icon,proto3" json:"icon,omitempty"`
	Url                  string   `protobuf:"bytes,2,opt,name=url,proto3" json:"url,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserSocial) Reset()         { *m = UserSocial{} }
func (m *UserSocial) String() string { return proto.CompactTextString(m) }
func (*UserSocial) ProtoMessage()    {}
func (*UserSocial) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{1}
}

func (m *UserSocial) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserSocial.Unmarshal(m, b)
}
func (m *UserSocial) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserSocial.Marshal(b, m, deterministic)
}
func (m *UserSocial) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserSocial.Merge(m, src)
}
func (m *UserSocial) XXX_Size() int {
	return xxx_messageInfo_UserSocial.Size(m)
}
func (m *UserSocial) XXX_DiscardUnknown() {
	xxx_messageInfo_UserSocial.DiscardUnknown(m)
}

var xxx_messageInfo_UserSocial proto.InternalMessageInfo

func (m *UserSocial) GetIcon() string {
	if m != nil {
		return m.Icon
	}
	return ""
}

func (m *UserSocial) GetUrl() string {
	if m != nil {
		return m.Url
	}
	return ""
}

type UserServiceCreateRq struct {
	Email                string   `protobuf:"bytes,1,opt,name=email,proto3" json:"email,omitempty"`
	Password             string   `protobuf:"bytes,2,opt,name=password,proto3" json:"password,omitempty"`
	Active               bool     `protobuf:"varint,3,opt,name=active,proto3" json:"active,omitempty"`
	Name                 string   `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	Phone                []string `protobuf:"bytes,5,rep,name=phone,proto3" json:"phone,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserServiceCreateRq) Reset()         { *m = UserServiceCreateRq{} }
func (m *UserServiceCreateRq) String() string { return proto.CompactTextString(m) }
func (*UserServiceCreateRq) ProtoMessage()    {}
func (*UserServiceCreateRq) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{2}
}

func (m *UserServiceCreateRq) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserServiceCreateRq.Unmarshal(m, b)
}
func (m *UserServiceCreateRq) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserServiceCreateRq.Marshal(b, m, deterministic)
}
func (m *UserServiceCreateRq) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserServiceCreateRq.Merge(m, src)
}
func (m *UserServiceCreateRq) XXX_Size() int {
	return xxx_messageInfo_UserServiceCreateRq.Size(m)
}
func (m *UserServiceCreateRq) XXX_DiscardUnknown() {
	xxx_messageInfo_UserServiceCreateRq.DiscardUnknown(m)
}

var xxx_messageInfo_UserServiceCreateRq proto.InternalMessageInfo

func (m *UserServiceCreateRq) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *UserServiceCreateRq) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

func (m *UserServiceCreateRq) GetActive() bool {
	if m != nil {
		return m.Active
	}
	return false
}

func (m *UserServiceCreateRq) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UserServiceCreateRq) GetPhone() []string {
	if m != nil {
		return m.Phone
	}
	return nil
}

type UserServiceModel struct {
	Id                   int64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Email                string   `protobuf:"bytes,2,opt,name=email,proto3" json:"email,omitempty"`
	Password             string   `protobuf:"bytes,3,opt,name=password,proto3" json:"password,omitempty"`
	CreatedAt            string   `protobuf:"bytes,4,opt,name=createdAt,proto3" json:"createdAt,omitempty"`
	UpdatedAt            string   `protobuf:"bytes,5,opt,name=updatedAt,proto3" json:"updatedAt,omitempty"`
	Active               bool     `protobuf:"varint,6,opt,name=active,proto3" json:"active,omitempty"`
	Name                 string   `protobuf:"bytes,7,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserServiceModel) Reset()         { *m = UserServiceModel{} }
func (m *UserServiceModel) String() string { return proto.CompactTextString(m) }
func (*UserServiceModel) ProtoMessage()    {}
func (*UserServiceModel) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{3}
}

func (m *UserServiceModel) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserServiceModel.Unmarshal(m, b)
}
func (m *UserServiceModel) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserServiceModel.Marshal(b, m, deterministic)
}
func (m *UserServiceModel) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserServiceModel.Merge(m, src)
}
func (m *UserServiceModel) XXX_Size() int {
	return xxx_messageInfo_UserServiceModel.Size(m)
}
func (m *UserServiceModel) XXX_DiscardUnknown() {
	xxx_messageInfo_UserServiceModel.DiscardUnknown(m)
}

var xxx_messageInfo_UserServiceModel proto.InternalMessageInfo

func (m *UserServiceModel) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *UserServiceModel) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *UserServiceModel) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

func (m *UserServiceModel) GetCreatedAt() string {
	if m != nil {
		return m.CreatedAt
	}
	return ""
}

func (m *UserServiceModel) GetUpdatedAt() string {
	if m != nil {
		return m.UpdatedAt
	}
	return ""
}

func (m *UserServiceModel) GetActive() bool {
	if m != nil {
		return m.Active
	}
	return false
}

func (m *UserServiceModel) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type UserServiceUpdateRq struct {
	Email                string   `protobuf:"bytes,1,opt,name=email,proto3" json:"email,omitempty"`
	Password             string   `protobuf:"bytes,2,opt,name=password,proto3" json:"password,omitempty"`
	Active               bool     `protobuf:"varint,3,opt,name=active,proto3" json:"active,omitempty"`
	Name                 string   `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	Id                   int64    `protobuf:"varint,5,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserServiceUpdateRq) Reset()         { *m = UserServiceUpdateRq{} }
func (m *UserServiceUpdateRq) String() string { return proto.CompactTextString(m) }
func (*UserServiceUpdateRq) ProtoMessage()    {}
func (*UserServiceUpdateRq) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{4}
}

func (m *UserServiceUpdateRq) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserServiceUpdateRq.Unmarshal(m, b)
}
func (m *UserServiceUpdateRq) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserServiceUpdateRq.Marshal(b, m, deterministic)
}
func (m *UserServiceUpdateRq) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserServiceUpdateRq.Merge(m, src)
}
func (m *UserServiceUpdateRq) XXX_Size() int {
	return xxx_messageInfo_UserServiceUpdateRq.Size(m)
}
func (m *UserServiceUpdateRq) XXX_DiscardUnknown() {
	xxx_messageInfo_UserServiceUpdateRq.DiscardUnknown(m)
}

var xxx_messageInfo_UserServiceUpdateRq proto.InternalMessageInfo

func (m *UserServiceUpdateRq) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *UserServiceUpdateRq) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

func (m *UserServiceUpdateRq) GetActive() bool {
	if m != nil {
		return m.Active
	}
	return false
}

func (m *UserServiceUpdateRq) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UserServiceUpdateRq) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

type UserServiceGetRq struct {
	Id                   int64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserServiceGetRq) Reset()         { *m = UserServiceGetRq{} }
func (m *UserServiceGetRq) String() string { return proto.CompactTextString(m) }
func (*UserServiceGetRq) ProtoMessage()    {}
func (*UserServiceGetRq) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{5}
}

func (m *UserServiceGetRq) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserServiceGetRq.Unmarshal(m, b)
}
func (m *UserServiceGetRq) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserServiceGetRq.Marshal(b, m, deterministic)
}
func (m *UserServiceGetRq) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserServiceGetRq.Merge(m, src)
}
func (m *UserServiceGetRq) XXX_Size() int {
	return xxx_messageInfo_UserServiceGetRq.Size(m)
}
func (m *UserServiceGetRq) XXX_DiscardUnknown() {
	xxx_messageInfo_UserServiceGetRq.DiscardUnknown(m)
}

var xxx_messageInfo_UserServiceGetRq proto.InternalMessageInfo

func (m *UserServiceGetRq) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

type UserServiceLoginRq struct {
	Email                string   `protobuf:"bytes,1,opt,name=email,proto3" json:"email,omitempty"`
	Password             string   `protobuf:"bytes,2,opt,name=password,proto3" json:"password,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserServiceLoginRq) Reset()         { *m = UserServiceLoginRq{} }
func (m *UserServiceLoginRq) String() string { return proto.CompactTextString(m) }
func (*UserServiceLoginRq) ProtoMessage()    {}
func (*UserServiceLoginRq) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{6}
}

func (m *UserServiceLoginRq) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserServiceLoginRq.Unmarshal(m, b)
}
func (m *UserServiceLoginRq) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserServiceLoginRq.Marshal(b, m, deterministic)
}
func (m *UserServiceLoginRq) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserServiceLoginRq.Merge(m, src)
}
func (m *UserServiceLoginRq) XXX_Size() int {
	return xxx_messageInfo_UserServiceLoginRq.Size(m)
}
func (m *UserServiceLoginRq) XXX_DiscardUnknown() {
	xxx_messageInfo_UserServiceLoginRq.DiscardUnknown(m)
}

var xxx_messageInfo_UserServiceLoginRq proto.InternalMessageInfo

func (m *UserServiceLoginRq) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *UserServiceLoginRq) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

type UserServiceLoginRs struct {
	Token                string            `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	User                 *UserServiceModel `protobuf:"bytes,2,opt,name=user,proto3" json:"user,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *UserServiceLoginRs) Reset()         { *m = UserServiceLoginRs{} }
func (m *UserServiceLoginRs) String() string { return proto.CompactTextString(m) }
func (*UserServiceLoginRs) ProtoMessage()    {}
func (*UserServiceLoginRs) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{7}
}

func (m *UserServiceLoginRs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserServiceLoginRs.Unmarshal(m, b)
}
func (m *UserServiceLoginRs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserServiceLoginRs.Marshal(b, m, deterministic)
}
func (m *UserServiceLoginRs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserServiceLoginRs.Merge(m, src)
}
func (m *UserServiceLoginRs) XXX_Size() int {
	return xxx_messageInfo_UserServiceLoginRs.Size(m)
}
func (m *UserServiceLoginRs) XXX_DiscardUnknown() {
	xxx_messageInfo_UserServiceLoginRs.DiscardUnknown(m)
}

var xxx_messageInfo_UserServiceLoginRs proto.InternalMessageInfo

func (m *UserServiceLoginRs) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *UserServiceLoginRs) GetUser() *UserServiceModel {
	if m != nil {
		return m.User
	}
	return nil
}

type UserServiceGetRs struct {
	Id                   int64         `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Email                string        `protobuf:"bytes,2,opt,name=email,proto3" json:"email,omitempty"`
	UpdatedAt            string        `protobuf:"bytes,3,opt,name=updatedAt,proto3" json:"updatedAt,omitempty"`
	Name                 string        `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	Description          string        `protobuf:"bytes,5,opt,name=description,proto3" json:"description,omitempty"`
	Socials              []*UserSocial `protobuf:"bytes,6,rep,name=socials,proto3" json:"socials,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *UserServiceGetRs) Reset()         { *m = UserServiceGetRs{} }
func (m *UserServiceGetRs) String() string { return proto.CompactTextString(m) }
func (*UserServiceGetRs) ProtoMessage()    {}
func (*UserServiceGetRs) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{8}
}

func (m *UserServiceGetRs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserServiceGetRs.Unmarshal(m, b)
}
func (m *UserServiceGetRs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserServiceGetRs.Marshal(b, m, deterministic)
}
func (m *UserServiceGetRs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserServiceGetRs.Merge(m, src)
}
func (m *UserServiceGetRs) XXX_Size() int {
	return xxx_messageInfo_UserServiceGetRs.Size(m)
}
func (m *UserServiceGetRs) XXX_DiscardUnknown() {
	xxx_messageInfo_UserServiceGetRs.DiscardUnknown(m)
}

var xxx_messageInfo_UserServiceGetRs proto.InternalMessageInfo

func (m *UserServiceGetRs) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *UserServiceGetRs) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *UserServiceGetRs) GetUpdatedAt() string {
	if m != nil {
		return m.UpdatedAt
	}
	return ""
}

func (m *UserServiceGetRs) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UserServiceGetRs) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *UserServiceGetRs) GetSocials() []*UserSocial {
	if m != nil {
		return m.Socials
	}
	return nil
}

type UserServiceGetAllRq struct {
	Offset               string   `protobuf:"bytes,1,opt,name=offset,proto3" json:"offset,omitempty"`
	Limit                string   `protobuf:"bytes,2,opt,name=limit,proto3" json:"limit,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserServiceGetAllRq) Reset()         { *m = UserServiceGetAllRq{} }
func (m *UserServiceGetAllRq) String() string { return proto.CompactTextString(m) }
func (*UserServiceGetAllRq) ProtoMessage()    {}
func (*UserServiceGetAllRq) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{9}
}

func (m *UserServiceGetAllRq) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserServiceGetAllRq.Unmarshal(m, b)
}
func (m *UserServiceGetAllRq) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserServiceGetAllRq.Marshal(b, m, deterministic)
}
func (m *UserServiceGetAllRq) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserServiceGetAllRq.Merge(m, src)
}
func (m *UserServiceGetAllRq) XXX_Size() int {
	return xxx_messageInfo_UserServiceGetAllRq.Size(m)
}
func (m *UserServiceGetAllRq) XXX_DiscardUnknown() {
	xxx_messageInfo_UserServiceGetAllRq.DiscardUnknown(m)
}

var xxx_messageInfo_UserServiceGetAllRq proto.InternalMessageInfo

func (m *UserServiceGetAllRq) GetOffset() string {
	if m != nil {
		return m.Offset
	}
	return ""
}

func (m *UserServiceGetAllRq) GetLimit() string {
	if m != nil {
		return m.Limit
	}
	return ""
}

type UserServiceGetAllRs struct {
	Result               []*UserServiceModel `protobuf:"bytes,1,rep,name=result,proto3" json:"result,omitempty"`
	Count                int64               `protobuf:"varint,2,opt,name=count,proto3" json:"count,omitempty"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *UserServiceGetAllRs) Reset()         { *m = UserServiceGetAllRs{} }
func (m *UserServiceGetAllRs) String() string { return proto.CompactTextString(m) }
func (*UserServiceGetAllRs) ProtoMessage()    {}
func (*UserServiceGetAllRs) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{10}
}

func (m *UserServiceGetAllRs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserServiceGetAllRs.Unmarshal(m, b)
}
func (m *UserServiceGetAllRs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserServiceGetAllRs.Marshal(b, m, deterministic)
}
func (m *UserServiceGetAllRs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserServiceGetAllRs.Merge(m, src)
}
func (m *UserServiceGetAllRs) XXX_Size() int {
	return xxx_messageInfo_UserServiceGetAllRs.Size(m)
}
func (m *UserServiceGetAllRs) XXX_DiscardUnknown() {
	xxx_messageInfo_UserServiceGetAllRs.DiscardUnknown(m)
}

var xxx_messageInfo_UserServiceGetAllRs proto.InternalMessageInfo

func (m *UserServiceGetAllRs) GetResult() []*UserServiceModel {
	if m != nil {
		return m.Result
	}
	return nil
}

func (m *UserServiceGetAllRs) GetCount() int64 {
	if m != nil {
		return m.Count
	}
	return 0
}

type UserServiceDeleteRq struct {
	Id                   int64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserServiceDeleteRq) Reset()         { *m = UserServiceDeleteRq{} }
func (m *UserServiceDeleteRq) String() string { return proto.CompactTextString(m) }
func (*UserServiceDeleteRq) ProtoMessage()    {}
func (*UserServiceDeleteRq) Descriptor() ([]byte, []int) {
	return fileDescriptor_ba03f2599437003f, []int{11}
}

func (m *UserServiceDeleteRq) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserServiceDeleteRq.Unmarshal(m, b)
}
func (m *UserServiceDeleteRq) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserServiceDeleteRq.Marshal(b, m, deterministic)
}
func (m *UserServiceDeleteRq) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserServiceDeleteRq.Merge(m, src)
}
func (m *UserServiceDeleteRq) XXX_Size() int {
	return xxx_messageInfo_UserServiceDeleteRq.Size(m)
}
func (m *UserServiceDeleteRq) XXX_DiscardUnknown() {
	xxx_messageInfo_UserServiceDeleteRq.DiscardUnknown(m)
}

var xxx_messageInfo_UserServiceDeleteRq proto.InternalMessageInfo

func (m *UserServiceDeleteRq) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func init() {
	proto.RegisterType((*UserServiceBool)(nil), "proto.UserServiceBool")
	proto.RegisterType((*UserSocial)(nil), "proto.UserSocial")
	proto.RegisterType((*UserServiceCreateRq)(nil), "proto.UserServiceCreateRq")
	proto.RegisterType((*UserServiceModel)(nil), "proto.UserServiceModel")
	proto.RegisterType((*UserServiceUpdateRq)(nil), "proto.UserServiceUpdateRq")
	proto.RegisterType((*UserServiceGetRq)(nil), "proto.UserServiceGetRq")
	proto.RegisterType((*UserServiceLoginRq)(nil), "proto.UserServiceLoginRq")
	proto.RegisterType((*UserServiceLoginRs)(nil), "proto.UserServiceLoginRs")
	proto.RegisterType((*UserServiceGetRs)(nil), "proto.UserServiceGetRs")
	proto.RegisterType((*UserServiceGetAllRq)(nil), "proto.UserServiceGetAllRq")
	proto.RegisterType((*UserServiceGetAllRs)(nil), "proto.UserServiceGetAllRs")
	proto.RegisterType((*UserServiceDeleteRq)(nil), "proto.UserServiceDeleteRq")
}

func init() {
	proto.RegisterFile("proto/userService.proto", fileDescriptor_ba03f2599437003f)
}

var fileDescriptor_ba03f2599437003f = []byte{
	// 563 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x54, 0x4d, 0x6f, 0xd3, 0x40,
	0x10, 0x55, 0xb2, 0xb5, 0xd3, 0x4e, 0x24, 0x28, 0x0b, 0x6a, 0x8d, 0xc5, 0x21, 0x5a, 0x09, 0xa9,
	0x52, 0xa4, 0x56, 0x0a, 0x07, 0x0e, 0x80, 0xa0, 0x14, 0x91, 0x0b, 0x5c, 0x5c, 0x55, 0x5c, 0xb8,
	0x18, 0x7b, 0x0a, 0x2b, 0x1c, 0x6f, 0xe2, 0x5d, 0x97, 0x1f, 0xc0, 0x89, 0x9f, 0x84, 0xc4, 0x85,
	0x7f, 0x86, 0x76, 0xd6, 0x6e, 0x1c, 0xc7, 0x8e, 0x10, 0x12, 0xa7, 0xec, 0x7c, 0xe4, 0xf9, 0xbd,
	0x37, 0xb3, 0x0b, 0xc7, 0xcb, 0x42, 0x19, 0x75, 0x56, 0x6a, 0x2c, 0x2e, 0xb1, 0xb8, 0x91, 0x09,
	0x9e, 0x52, 0x86, 0x7b, 0xf4, 0x23, 0xa6, 0x70, 0xf7, 0x6a, 0x5d, 0x7b, 0xad, 0x54, 0xc6, 0x03,
	0x18, 0xe9, 0x32, 0x49, 0x50, 0xeb, 0x60, 0x30, 0x19, 0x9c, 0xec, 0x47, 0x75, 0x28, 0x66, 0x00,
	0xd4, 0xac, 0x12, 0x19, 0x67, 0x9c, 0xc3, 0x9e, 0x4c, 0x54, 0x4e, 0x4d, 0x07, 0x11, 0x9d, 0xf9,
	0x21, 0xb0, 0xb2, 0xc8, 0x82, 0x21, 0xa5, 0xec, 0x51, 0xfc, 0x18, 0xc0, 0xfd, 0xc6, 0x17, 0x2e,
	0x0a, 0x8c, 0x0d, 0x46, 0x2b, 0xfe, 0x00, 0x3c, 0x5c, 0xc4, 0x32, 0xab, 0xfe, 0xee, 0x02, 0x1e,
	0xc2, 0xfe, 0x32, 0xd6, 0xfa, 0x9b, 0x2a, 0xd2, 0x0a, 0xe4, 0x36, 0xe6, 0x47, 0xe0, 0xc7, 0x89,
	0x91, 0x37, 0x18, 0x30, 0xa2, 0x55, 0x45, 0x96, 0x47, 0x1e, 0x2f, 0x30, 0xd8, 0x73, 0x3c, 0xec,
	0xd9, 0xa2, 0x2f, 0xbf, 0xa8, 0x1c, 0x03, 0x6f, 0xc2, 0x2c, 0x3a, 0x05, 0xe2, 0xd7, 0x00, 0x0e,
	0x1b, 0x5c, 0xde, 0xab, 0x14, 0x33, 0x7e, 0x07, 0x86, 0x32, 0x25, 0x16, 0x2c, 0x1a, 0xca, 0x74,
	0x4d, 0x6c, 0xd8, 0x47, 0x8c, 0xb5, 0x88, 0x3d, 0x82, 0x83, 0x84, 0x64, 0xa5, 0xe7, 0xa6, 0x62,
	0xb1, 0x4e, 0xd8, 0x6a, 0xb9, 0x4c, 0xab, 0xaa, 0xe7, 0xaa, 0xb7, 0x89, 0x86, 0x28, 0xbf, 0x53,
	0xd4, 0x68, 0x2d, 0x4a, 0x7c, 0xdf, 0xb4, 0xf2, 0x8a, 0x40, 0xfe, 0xbb, 0x95, 0xce, 0x1f, 0xaf,
	0xf6, 0x47, 0x88, 0x0d, 0x0f, 0xe7, 0x68, 0xa2, 0x55, 0xdb, 0x43, 0xf1, 0x16, 0x78, 0xa3, 0xe7,
	0x9d, 0xfa, 0x2c, 0xf3, 0x7f, 0xe1, 0x29, 0x3e, 0x74, 0xe0, 0x68, 0x8b, 0x63, 0xd4, 0x57, 0xac,
	0x37, 0xcf, 0x05, 0x7c, 0x0a, 0x7b, 0x76, 0xcb, 0x09, 0x63, 0x3c, 0x3b, 0x76, 0x6b, 0x7e, 0xda,
	0x1e, 0x77, 0x44, 0x4d, 0xe2, 0xe7, 0x60, 0x4b, 0x85, 0xfe, 0xcb, 0x4d, 0xd8, 0x98, 0x27, 0x6b,
	0xcf, 0xb3, 0xcb, 0xc1, 0x09, 0x8c, 0x53, 0xd4, 0x49, 0x21, 0x97, 0x46, 0xaa, 0xbc, 0xda, 0x81,
	0x66, 0x8a, 0x4f, 0x61, 0xa4, 0xe9, 0x52, 0xe9, 0xc0, 0x9f, 0xb0, 0x93, 0xf1, 0xec, 0x5e, 0x93,
	0x3e, 0x55, 0xa2, 0xba, 0x43, 0x5c, 0x6c, 0x6c, 0xc1, 0x1c, 0xcd, 0x79, 0x96, 0x45, 0x2b, 0x3b,
	0x53, 0x75, 0x7d, 0xad, 0xd1, 0x54, 0xb6, 0x54, 0x91, 0x55, 0x91, 0xc9, 0x85, 0x34, 0xb5, 0x0a,
	0x0a, 0xc4, 0xc7, 0x2e, 0x10, 0xcd, 0xcf, 0xc0, 0x2f, 0x50, 0x97, 0x99, 0x05, 0x61, 0xbb, 0x6c,
	0xac, 0xda, 0x2c, 0x7a, 0xa2, 0xca, 0xdc, 0xa1, 0xb3, 0xc8, 0x05, 0xe2, 0xf1, 0x06, 0xfa, 0x1b,
	0xcc, 0x90, 0x16, 0xb5, 0x65, 0xf0, 0xec, 0x37, 0x83, 0x71, 0xa3, 0x8f, 0xbf, 0x04, 0xdf, 0xbd,
	0x0f, 0x3c, 0xdc, 0xfe, 0x6e, 0xfd, 0x72, 0x84, 0x0f, 0xb7, 0x6b, 0xf5, 0x66, 0x3c, 0x07, 0xdf,
	0xdd, 0x8a, 0x2e, 0x80, 0xfa, 0xbe, 0x84, 0x47, 0xdb, 0x35, 0x7a, 0xf8, 0x9e, 0x02, 0x9b, 0xa3,
	0xe1, 0x1d, 0x9a, 0x69, 0xcb, 0xc3, 0x9e, 0x82, 0xe6, 0x2f, 0xc0, 0x23, 0x06, 0xbc, 0x97, 0xda,
	0x4e, 0xd6, 0xaf, 0xc0, 0x77, 0x03, 0xe8, 0x62, 0x5d, 0xcf, 0x37, 0xec, 0xaf, 0x91, 0x6e, 0x67,
	0x72, 0x17, 0x42, 0x6d, 0x7f, 0xaf, 0xee, 0x67, 0xe0, 0x5d, 0x9a, 0xb8, 0xd8, 0xa1, 0xbc, 0x9f,
	0xfc, 0x27, 0x9f, 0x2a, 0x4f, 0xfe, 0x04, 0x00, 0x00, 0xff, 0xff, 0x9a, 0x25, 0xd0, 0x24, 0x69,
	0x06, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// UserServiceClient is the client API for UserService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type UserServiceClient interface {
	Create(ctx context.Context, in *UserServiceCreateRq, opts ...grpc.CallOption) (*UserServiceLoginRs, error)
	Update(ctx context.Context, in *UserServiceUpdateRq, opts ...grpc.CallOption) (*UserServiceBool, error)
	Get(ctx context.Context, in *UserServiceGetRq, opts ...grpc.CallOption) (*UserServiceGetRs, error)
	Login(ctx context.Context, in *UserServiceLoginRq, opts ...grpc.CallOption) (*UserServiceLoginRs, error)
	GetAll(ctx context.Context, in *UserServiceGetAllRq, opts ...grpc.CallOption) (*UserServiceGetAllRs, error)
	Delete(ctx context.Context, in *UserServiceDeleteRq, opts ...grpc.CallOption) (*UserServiceBool, error)
	Start(ctx context.Context, in *UserServiceGetRq, opts ...grpc.CallOption) (*UserServiceLoginRs, error)
}

type userServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewUserServiceClient(cc grpc.ClientConnInterface) UserServiceClient {
	return &userServiceClient{cc}
}

func (c *userServiceClient) Create(ctx context.Context, in *UserServiceCreateRq, opts ...grpc.CallOption) (*UserServiceLoginRs, error) {
	out := new(UserServiceLoginRs)
	err := c.cc.Invoke(ctx, "/proto.UserService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) Update(ctx context.Context, in *UserServiceUpdateRq, opts ...grpc.CallOption) (*UserServiceBool, error) {
	out := new(UserServiceBool)
	err := c.cc.Invoke(ctx, "/proto.UserService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) Get(ctx context.Context, in *UserServiceGetRq, opts ...grpc.CallOption) (*UserServiceGetRs, error) {
	out := new(UserServiceGetRs)
	err := c.cc.Invoke(ctx, "/proto.UserService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) Login(ctx context.Context, in *UserServiceLoginRq, opts ...grpc.CallOption) (*UserServiceLoginRs, error) {
	out := new(UserServiceLoginRs)
	err := c.cc.Invoke(ctx, "/proto.UserService/Login", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetAll(ctx context.Context, in *UserServiceGetAllRq, opts ...grpc.CallOption) (*UserServiceGetAllRs, error) {
	out := new(UserServiceGetAllRs)
	err := c.cc.Invoke(ctx, "/proto.UserService/GetAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) Delete(ctx context.Context, in *UserServiceDeleteRq, opts ...grpc.CallOption) (*UserServiceBool, error) {
	out := new(UserServiceBool)
	err := c.cc.Invoke(ctx, "/proto.UserService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) Start(ctx context.Context, in *UserServiceGetRq, opts ...grpc.CallOption) (*UserServiceLoginRs, error) {
	out := new(UserServiceLoginRs)
	err := c.cc.Invoke(ctx, "/proto.UserService/Start", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserServiceServer is the server API for UserService service.
type UserServiceServer interface {
	Create(context.Context, *UserServiceCreateRq) (*UserServiceLoginRs, error)
	Update(context.Context, *UserServiceUpdateRq) (*UserServiceBool, error)
	Get(context.Context, *UserServiceGetRq) (*UserServiceGetRs, error)
	Login(context.Context, *UserServiceLoginRq) (*UserServiceLoginRs, error)
	GetAll(context.Context, *UserServiceGetAllRq) (*UserServiceGetAllRs, error)
	Delete(context.Context, *UserServiceDeleteRq) (*UserServiceBool, error)
	Start(context.Context, *UserServiceGetRq) (*UserServiceLoginRs, error)
}

// UnimplementedUserServiceServer can be embedded to have forward compatible implementations.
type UnimplementedUserServiceServer struct {
}

func (*UnimplementedUserServiceServer) Create(ctx context.Context, req *UserServiceCreateRq) (*UserServiceLoginRs, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedUserServiceServer) Update(ctx context.Context, req *UserServiceUpdateRq) (*UserServiceBool, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (*UnimplementedUserServiceServer) Get(ctx context.Context, req *UserServiceGetRq) (*UserServiceGetRs, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedUserServiceServer) Login(ctx context.Context, req *UserServiceLoginRq) (*UserServiceLoginRs, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Login not implemented")
}
func (*UnimplementedUserServiceServer) GetAll(ctx context.Context, req *UserServiceGetAllRq) (*UserServiceGetAllRs, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAll not implemented")
}
func (*UnimplementedUserServiceServer) Delete(ctx context.Context, req *UserServiceDeleteRq) (*UserServiceBool, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (*UnimplementedUserServiceServer) Start(ctx context.Context, req *UserServiceGetRq) (*UserServiceLoginRs, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Start not implemented")
}

func RegisterUserServiceServer(s *grpc.Server, srv UserServiceServer) {
	s.RegisterService(&_UserService_serviceDesc, srv)
}

func _UserService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserServiceCreateRq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.UserService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).Create(ctx, req.(*UserServiceCreateRq))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserServiceUpdateRq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.UserService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).Update(ctx, req.(*UserServiceUpdateRq))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserServiceGetRq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.UserService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).Get(ctx, req.(*UserServiceGetRq))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_Login_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserServiceLoginRq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).Login(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.UserService/Login",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).Login(ctx, req.(*UserServiceLoginRq))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_GetAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserServiceGetAllRq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GetAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.UserService/GetAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetAll(ctx, req.(*UserServiceGetAllRq))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserServiceDeleteRq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.UserService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).Delete(ctx, req.(*UserServiceDeleteRq))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_Start_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserServiceGetRq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).Start(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.UserService/Start",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).Start(ctx, req.(*UserServiceGetRq))
	}
	return interceptor(ctx, in, info, handler)
}

var _UserService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "proto.UserService",
	HandlerType: (*UserServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _UserService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _UserService_Update_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _UserService_Get_Handler,
		},
		{
			MethodName: "Login",
			Handler:    _UserService_Login_Handler,
		},
		{
			MethodName: "GetAll",
			Handler:    _UserService_GetAll_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _UserService_Delete_Handler,
		},
		{
			MethodName: "Start",
			Handler:    _UserService_Start_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/userService.proto",
}
